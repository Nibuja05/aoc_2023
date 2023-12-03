import { getInput, getTestInput } from "./input";
import "../util";

// Erster Teil
console.log(getInput().split("\n").map((line) => <const>[ [...line.matchAll(/[^\d.\s]/g)].map(match => match.index!), [...line.matchAll(/\d+/g)].map(match => <const>[match.index!, match.index! + match[0].length, parseInt(match[0])]) ]).flatMap(([symbols, numbers], lineIndex, lines) => numbers.filter(([start, end, _]) => start > 0 && symbols.includes(start - 1) || symbols.includes(end) || lineIndex > 0 && (lines[lineIndex - 1][0].some(symbol => symbol >= start - 1 && symbol <= end)) || lineIndex < (lines.length - 1) && (lines[lineIndex + 1][0].some(symbol => symbol >= start - 1 && symbol <= end)) ).map(([_, __, number]) => number)).reduce((prev, cur) => prev + cur));

// Zweiter Teil
console.log(getInput().split("\n").map((line) => <const>[ [...line.matchAll(/[*]/g)].map(match => match.index!), [...line.matchAll(/\d+/g)].map(match => <const>[match.index!, match.index! + match[0].length, parseInt(match[0])]) ]).flatMap(([symbols, numbers], lineIndex, lines) => symbols.map(index => [...numbers.filter(([start, end, _]) => start == index + 1 || end == index).map(([_, __, number]) => number), ...(lineIndex == 0? [] : lines[lineIndex - 1][1].filter(([start, end, _]) => (start >= index - 1 && start <= index + 1) || (end <= index + 1 && end > index - 1)).map(([_, __, number]) => number)), ...(lineIndex == lines.length - 1? [] : lines[lineIndex + 1][1].filter(([start, end, _]) => (start >= index - 1 && start <= index + 1) || (end <= index + 1 && end > index - 1)).map(([_, __, number]) => number)), ]).filter(numbers => numbers.length == 2).map(numbers => numbers[0] * numbers[1])).reduce((prev, cur) => prev + cur));

// console.log(getInput()
// 	.split("\n")
// 	.map((line) => <const>[
// 		[...line.matchAll(/[^\d.\s]/g)]
// 			.map(match => match.index!),
// 		[...line.matchAll(/\d+/g)]
// 			.map(match => <const>[match.index!, match.index! + match[0].length, parseInt(match[0])])
// 	])
// 	.flatMap(([symbols, numbers], lineIndex, lines) => numbers
// 		.filter(([start, end, _]) => 
// 			start > 0 && symbols.includes(start - 1) ||
// 			symbols.includes(end) ||
// 			lineIndex > 0 && (
// 				lines[lineIndex - 1][0]
// 					.some(symbol => symbol >= start - 1 && symbol <= end)
// 			) ||
// 			lineIndex < (lines.length - 1) && (
// 				lines[lineIndex + 1][0]
// 					.some(symbol => symbol >= start - 1 && symbol <= end)
// 			)
// 		)
// 		.map(([_, __, number]) => number)
// 	)
// 	.reduce((prev, cur) => prev + cur)
// );

// console.log(getInput()
// 	.split("\n")
// 	.map((line) => <const>[
// 		[...line.matchAll(/[*]/g)]
// 			.map(match => match.index!),
// 		[...line.matchAll(/\d+/g)]
// 			.map(match => <const>[match.index!, match.index! + match[0].length, parseInt(match[0])])
// 	])
// 	.flatMap(([symbols, numbers], lineIndex, lines) => symbols
// 		.map(index => [
// 			...numbers
// 				.filter(([start, end, _]) => start == index + 1 || end == index)
// 				.map(([_, __, number]) => number),
// 			...(lineIndex == 0? [] : lines[lineIndex - 1][1]
// 				.filter(([start, end, _]) => (start >= index - 1 && start <= index + 1) || (end <= index + 1 && end > index - 1))
// 				.map(([_, __, number]) => number)
// 			),
// 			...(lineIndex == lines.length - 1? [] : lines[lineIndex + 1][1]
// 				.filter(([start, end, _]) => (start >= index - 1 && start <= index + 1) || (end <= index + 1 && end > index - 1))
// 				.map(([_, __, number]) => number)
// 			),
// 		])
// 		.filter(numbers => numbers.length == 2)
// 		.map(numbers => numbers[0] * numbers[1])
// 	)
// 	.reduce((prev, cur) => prev + cur)
// )