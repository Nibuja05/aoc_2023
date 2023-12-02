import { getInput, getInput2, getTestInput, getTestInput2 } from "./input";
import "../util";
import { MatchArr } from "../util";

// Erster Teil
console.log(getInput().split("\n").map((line) => line.split("").filter((char) => /^[0-9]$/.test(char))).map((numbers) => [numbers[0], numbers[numbers.length - 1]]).map(([n1, n2]) => parseInt(n1 + n2)).reduce((prev, cur) => prev + cur));

// Zweiter Teil
console.log(getInput2().split("\n").map((line) => [...line.matchAll(/(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)|(\d)/g),].flatMap((m) => m.map((match, groupIndex, arr) => match && groupIndex ? groupIndex > 9 ? [parseInt(match), (arr as MatchArr)["index"]] : [groupIndex, (arr as MatchArr)["index"]] : null).filter((index) => index)).map((elem, index, arr) => index < arr.length - 1 ? elem![0] : [...line.substring(elem![1] + 1).matchAll(/(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)/g),].flatMap((m) => m.map((match, groupIndex) => match && groupIndex ? groupIndex : null).filter((index) => index)).use((result) => result.length == 0 ? elem![0] : result[0]))).map((numbers) => [numbers[0]!, numbers[numbers.length - 1]!]).map(([n1, n2]) => parseInt(`${n1}${n2}`)).reduce((prev, cur) => prev + cur));

// console.log(
// 	getInput()
// 		.split("\n")
// 		.map((line) => line.split("").filter((char) => /^[0-9]$/.test(char)))
// 		.map((numbers) => [numbers[0], numbers[numbers.length - 1]])
// 		.map(([n1, n2]) => parseInt(n1 + n2))
// 		.reduce((prev, cur) => prev + cur)
// );

// console.log(
// 	getInput2()
// 		.split("\n")
// 		.map((line) =>
// 			[
// 				...line.matchAll(
// 					/(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)|(\d)/g
// 				),
// 			]
// 				.flatMap((m) =>
// 					m
// 						.map((match, groupIndex, arr) =>
// 							match && groupIndex
// 								? groupIndex > 9
// 									? [
// 											parseInt(match),
// 											(arr as MatchArr)["index"],
// 									  ]
// 									: [groupIndex, (arr as MatchArr)["index"]]
// 								: null
// 						)
// 						.filter((index) => index)
// 				)
// 				.map((elem, index, arr) =>
// 					index < arr.length - 1
// 						? elem![0]
// 						: [
// 								...line
// 									.substring(elem![1] + 1)
// 									.matchAll(
// 										/(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)/g
// 									),
// 						  ]
// 								.flatMap((m) =>
// 									m
// 										.map((match, groupIndex) =>
// 											match && groupIndex
// 												? groupIndex
// 												: null
// 										)
// 										.filter((index) => index)
// 								)
// 								.use((result) =>
// 									result.length == 0 ? elem![0] : result[0]
// 								)
// 				)
// 		)
// 		.map((numbers) => [numbers[0]!, numbers[numbers.length - 1]!])
// 		.map(([n1, n2]) => parseInt(`${n1}${n2}`))
// 		.reduce((prev, cur) => prev + cur)
// );