import { getInput, getInput2, getTestInput, getTestInput2 } from "./input";
import "../util";
import { infiniteIterator, iterator } from "../util";

// console.log(getTestInput()
// 	.split("\n")
// 	.map(([ins, _, ...maps]) => [

// 	])
// );

// function* infiniteIterator<T>(arr: T[]): Generator<T, void, undefined> {
// 	let index = 0;
// 	const length = arr.length;

// 	while (true) {
// 	  yield arr[index];
// 	  index = (index + 1) % length;
// 	}
// }
// const iterator = infiniteIterator(["R", "L"]);

// console.log(iterator.red)

let index = 0;
const myIter = infiniteIterator([1, 2]);
// while (index < 10) {
// 	const item = myIter.next();
// 	console.log(index, item);
// 	index++;
// }

console.log(myIter.map((val) => val * 2).next());
console.log(
	myIter.reduce(
		(acc, cur) => acc + cur,
		0,
		(acc, cur, index) => index > 10
	)
);

// for (const val of myIter) {
// 	console.log(1, val);
// }
