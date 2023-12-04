import { getInput, getTestInput } from "./input";
import "../util";

// Erster Teil
console.log(getInput().split("\n").map(line => line.split(/:|\|/).splice(1).use(([winning, current]) => [[...winning.matchAll(/\d+/g)].map(match => parseInt(match[0])), [...current.matchAll(/\d+/g)].map(match => parseInt(match[0]))]).use(([winning, current]) => current.filter(number => winning.includes(number))).reduce((prev) => prev + 1, 0)).map(count => count == 0? 0 : Math.pow(2, count - 1)).reduce((prev, cur) => prev + cur, 0));

// Zweiter Teil
console.log(getInput().split("\n").map(line => line.split(/:|\|/).splice(1).use(([winning, current]) => [[...winning.matchAll(/\d+/g)].map(match => parseInt(match[0])), [...current.matchAll(/\d+/g)].map(match => parseInt(match[0]))]).use(([winning, current]) => current.filter(number => winning.includes(number))).reduce((prev) => prev + 1, 0)).map(line => <const>[Array.from({ length: line }, () => 1), 0 as number]).reduce((prev, cur) => (1 + (prev[0].shift() ?? 0)).use(count => [Array.from({ length: Math.max(prev[0].length, cur[0].length) }, (v, i) => (prev[0][i] || 0) + (cur[0][i] * count || 0)), prev[1] + count])).use(result => result[1] + 1));

// console.log(getInput()
// 	.split("\n")
// 	.map(line => line
// 		.split(/:|\|/)
// 		.splice(1)
// 		.use(([winning, current]) => <const>[
// 			[...winning.matchAll(/\d+/g)].map(match => parseInt(match[0])),
// 			[...current.matchAll(/\d+/g)].map(match => parseInt(match[0]))
// 		])
// 		.use(([winning, current]) => current
// 			.filter(number => winning.includes(number))
// 		)
// 		.reduce((prev) => prev + 1, 0)
// 	)
// 	.map(count => count == 0? 0 : Math.pow(2, count - 1))
// 	.reduce((prev, cur) => prev + cur, 0)
// );

// console.log(getInput()
// 	.split("\n")
// 	.map(line => line
// 		.split(/:|\|/)
// 		.splice(1)
// 		.use(([winning, current]) => [
// 			[...winning.matchAll(/\d+/g)].map(match => parseInt(match[0])),
// 			[...current.matchAll(/\d+/g)].map(match => parseInt(match[0]))
// 		])
// 		.use(([winning, current]) => current
// 			.filter(number => winning.includes(number))
// 		)
// 		.reduce((prev) => prev + 1, 0)
// 	)
// 	.map(line => <const>[Array.from({ length: line }, () => 1), 0 as number])
// 	.reduce((prev, cur) => (1 + (prev[0].shift() ?? 0)).use(count => [
// 		Array.from({ length: Math.max(prev[0].length, cur[0].length) }, (v, i) => (prev[0][i] || 0) + (cur[0][i] * count || 0)),
// 		prev[1] + count
// 		])
// 	)
// 	.use(result => result[1] + 1)
// );