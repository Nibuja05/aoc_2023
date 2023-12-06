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
			.map((number, index, numbers) => index % 2 == 0? [number, number + numbers[index + 1] - 1] : null)
			.filter(numbers => numbers) as number[][]
		,...other.map((category) =>
			category.split("\n").slice(1)
			.map(line => [...line.matchAll(/\d+/g)]
				.map(match => parseInt(match[0])) as [number, number, number]
			)
			.sort((a, b) => a[1] - b[1])
		)
	])
	.use(([seeds, ...categories]) => 
		categories.splice(0, 9).reduce((prev, category) => category
			.reduce((acc, [_, src, len]) => acc.includes(src) ? [...acc, src + len] : [...acc, src, src + len], [0])
			.reduce((acc, src) => 
				acc.flatMap(([start, end]) => src > start && src < end
					? [[start, src - 1], [src, end]]
					: [[start, end]])
			, prev)
			.use(splitted => category
				.reduce((acc, [dst, src, len]) => 
					acc.map(([start, end]) => start >= src && end <= src + len
						? [start + (dst - src), end + (dst - src)]
						: [start, end]
					)
				, splitted)	
			)
		, seeds)
	)
	// .filter(([i, _]) => i != 0)
	// .reduce((prev, cur) => `${prev}\n${cur}`, "")
	.reduce((prev, [cur, _]) => Math.min(prev, cur), Infinity)
);

// new idea: instead of seed numbers, take arrays with you:
// [start, length]
// for each step-> split into new chunks -> only need to consider first number of each chunk!!!
//