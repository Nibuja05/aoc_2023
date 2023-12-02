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

export type MatchArr = Array<string> & {
	index: number;
};

export {}; // Export an empty object to make this a module
