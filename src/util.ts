declare global {
	interface Object {
		/**
		 * Executes a callback function with the object as its parameter.
		 * @template T - The type of the object.
		 * @template R - The return type of the callback function.
		 * @param {((variable: T) => R)} callback - The callback function.
		 * @returns {R} - The result of the callback function.
		 */
		use<T, R>(this: T, callback: (variable: T) => R): R;
	}
}

/**
 * @template T - The type of the object.
 * @template R - The return type of the callback function.
 * @param {((variable: T) => R)} callback - The callback function.
 * @returns {R} - The result of the callback function.
 */
Object.prototype.use = function <T, R>(callback: (variable: T) => R) {
	// Use type assertion to infer the type of 'this'
	return callback(this as unknown as T);
};

interface CustomIterator<T> extends Iterable<T> {
	map<U>(callback: (value: T) => U): CustomIterator<U>;
	filter(callback: (value: T) => boolean): CustomIterator<T>;
	reduce<U>(
		callback: (accumulator: U, current: T, index: number, generator: CustomIterator<T>) => U,
		initialValue: U,
		cancelCondition: (accumulator: U, current: T, index: number, generator: CustomIterator<T>) => boolean
	): U;
	next(): T | undefined;
}

class CustomIteratorWrapper<T> implements CustomIterator<T> {
	private source: Iterable<T>;

	constructor(source: Iterable<T>) {
		this.source = source;
	}

	map<U>(callback: (value: T) => U): CustomIterator<U> {
		const mappedIterator = function* (this: CustomIteratorWrapper<T>) {
			for (const value of this.source) {
				yield callback(value);
			}
		}.bind(this);

		return new CustomIteratorWrapper<U>(mappedIterator());
	}

	filter(callback: (value: T) => boolean): CustomIterator<T> {
		const filteredIterator = function* (this: CustomIteratorWrapper<T>) {
			for (const value of this.source) {
				if (callback(value)) {
					yield value;
				}
			}
		}.bind(this);

		return new CustomIteratorWrapper<T>(filteredIterator());
	}

	reduce<U>(
		callback: (accumulator: U, current: T, index: number, generator: CustomIterator<T>) => U,
		initialValue: U,
		cancelCondition?: (accumulator: U, current: T, index: number, generator: CustomIterator<T>) => boolean
	): U {
		let accumulator = initialValue;
		let index = 0;

		const generator = this.source[Symbol.iterator]();
		let result = generator.next();

		while (!result.done) {
			if (cancelCondition && cancelCondition(accumulator, result.value, index, this)) {
				break;
			}
			accumulator = callback(accumulator, result.value, index, this);
			index++;
			result = generator.next();
		}

		return accumulator;
	}

	next(): T | undefined {
		const iterator = this.source[Symbol.iterator]();
		const result = iterator.next();
		return result.value;
	}

	[Symbol.iterator](): Iterator<T> {
		const iterator = this.source[Symbol.iterator]();

		return {
			next: () => {
				const result = iterator.next();
				if (result.done) {
					(iterator as any)[Symbol.iterator] = () => this[Symbol.iterator]();
				}
				return result;
			},
		};
	}
}

export function iterator<T>(source: Iterable<T>): CustomIterator<T>;
export function iterator<T>(source: (index: number) => T): CustomIterator<T>;
export function iterator<T>(source: Iterable<T> | ((index: number) => T)): CustomIterator<T> {
	if (typeof source == "function") {
		const generator = function* () {
			let index = 0;
			while (true) {
				yield source(index);
				index++;
			}
		};
		return new CustomIteratorWrapper<T>(generator());
	}
	return new CustomIteratorWrapper<T>(source);
}

export type MatchArr = Array<string> & {
	index: number;
};

export {}; // Export an empty object to make this a module
