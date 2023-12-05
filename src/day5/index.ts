import { getInput, getInput2, getTestInput, getTestInput2 } from "./input";
import "../util";

// console.log(getInput()
// 	.split("\n\n")
// 	.use(([seeds, ...other]) => <const>[
// 		[...seeds.split(":")[1].matchAll(/\d+/g)]
// 			.map(match => parseInt(match[0])),
// 		...other.map((category) =>
// 			category.split("\n").slice(1)
// 			.map(line => [...line.matchAll(/\d+/g)]
// 				.map(match => parseInt(match[0])) as [number, number, number]
// 			)
// 		)
// 	])
// 	.use(([seeds, ...categories]) => 
// 		categories.reduce((acc, category) => 
// 			acc.map(seed => 
// 				category.reduce((prev, cur) => 
// 					seed >= cur[1]
// 						? cur[1] > prev[0]
// 							? seed <= cur[1] + cur[2]
// 								? [cur[1], cur[0] + (seed - cur[1])] 
// 								: prev
// 							: prev 
// 						: prev
// 				, [-Infinity, seed])[1]
// 			)
// 		, seeds)
// 	)
// 	.reduce((prev, cur) => Math.min(prev, cur))
// );


// not working!!
// console.log(getInput()
// 	.split("\n\n")
// 	.use(([seeds, ...other]) => <const>[
// 		[...seeds.split(":")[1].matchAll(/\d+/g)]
// 			.map(match => parseInt(match[0]))
// 			.map((number, index, numbers) => index % 2 == 0? Array.from({length: numbers[index + 1]}, (_, i) => number + i) : null)
// 			.filter(numbers => numbers)
// 			.flat() as number[]
// 		,...other.map((category) =>
// 			category.split("\n").slice(1)
// 			.map(line => [...line.matchAll(/\d+/g)]
// 				.map(match => parseInt(match[0])) as [number, number, number]
// 			)
// 		)
// 	])
// 	.use(([seeds, ...categories]) => 
// 		categories.reduce((acc, category) => 
// 			acc.map(seed => 
// 				category.reduce((prev, cur) => 
// 					seed >= cur[1]
// 						? cur[1] > prev[0]
// 							? seed <= cur[1] + cur[2]
// 								? [cur[1], cur[0] + (seed - cur[1])] 
// 								: prev
// 							: prev 
// 						: prev
// 				, [-Infinity, seed])[1]
// 			)
// 		, seeds)
// 	)
// 	.reduce((prev, cur) => Math.min(prev, cur))
// );

console.log(getTestInput()
	.split("\n\n")
	.use(([seeds, ...other]) => <const>[
		[...seeds.split(":")[1].matchAll(/\d+/g)]
			.map(match => parseInt(match[0]))
			.map((number, index, numbers) => index % 2 == 0? [number, numbers[index + 1]] : null)
			.filter(numbers => numbers) as [number, number][]
		,...other.map((category) =>
			category.split("\n").slice(1)
			.map(line => [...line.matchAll(/\d+/g)]
				.map(match => parseInt(match[0])) as [number, number, number]
			)
		)
	])
	.use(([seeds, ...categories]) => 
		categories.reduce((acc, category) => 
			acc
		, seeds)
	)
	// .reduce((prev, cur) => Math.min(prev, cur))
);

// new idea: instead of seed numbers, take arrays with you:
// [start, length]
// for each step-> split into new chunks -> only need to consider first number of each chunk!!!
//