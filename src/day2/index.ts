import { getInput, getTestInput } from "./input";
import "../util";

// Erster Teil
console.log(getInput().split("\n").map((line) => line.match(/Game (\d+): (.*)/)?.use((match) => [parseInt(match[1]), match[2].split(";").map((set) => ({red: parseInt(set.match(/(?:(\d+) red)/)?.[1] ?? "0"), green: parseInt(set.match(/(?:(\d+) green)/)?.[1] ?? "0"), blue: parseInt(set.match(/(?:(\d+) blue)/)?.[1] ?? "0"),})).some(({red, green, blue}) => red > 12 || green > 13 || blue > 14)]) ?? []).map(tuple => !tuple[1]? tuple[0] as number : 0).reduce((prev, cur) => prev + cur, 0));

// Zweiter Teil
console.log(getInput().split("\n").map((line) => line.match(/Game (\d+): (.*)/)?.use((match) => match[2].split(";").map((set) => ({red: parseInt(set.match(/(?:(\d+) red)/)?.[1] ?? "0"), green: parseInt(set.match(/(?:(\d+) green)/)?.[1] ?? "0"), blue: parseInt(set.match(/(?:(\d+) blue)/)?.[1] ?? "0"),})).reduce((max, obj) => ({red: Math.max(max.red, obj.red), green: Math.max(max.green, obj.green), blue: Math.max(max.blue, obj.blue)}), {red: -Infinity, green: -Infinity, blue: -Infinity}).use(({red, green, blue}) => red * green * blue)) ?? 0).reduce((prev, cur) => prev + cur));

// console.log(
// 	getInput()
// 		.split("\n")
// 		.map((line) =>
// 			line.match(/Game (\d+): (.*)/)?.use((match) => [
// 				parseInt(match[1]),
// 				match[2].split(";")
// 					.map((set) => ({
// 						red: parseInt(set.match(/(?:(\d+) red)/)?.[1] ?? "0"),
// 						green: parseInt(set.match(/(?:(\d+) green)/)?.[1] ?? "0"),
// 						blue: parseInt(set.match(/(?:(\d+) blue)/)?.[1] ?? "0"),
// 					}))
// 					.some(({red, green, blue}) => red > 12 || green > 13 || blue > 14)
// 			]) ?? []
// 		).map(tuple => !tuple[1]? tuple[0] as number : 0)
// 		.reduce((prev, cur) => prev + cur, 0)
// );

// console.log(
// 	getInput()
// 		.split("\n")
// 		.map((line) =>
// 			line.match(/Game (\d+): (.*)/)?.use((match) => 
// 				match[2].split(";")
// 					.map((set) => ({
// 						red: parseInt(set.match(/(?:(\d+) red)/)?.[1] ?? "0"),
// 						green: parseInt(set.match(/(?:(\d+) green)/)?.[1] ?? "0"),
// 						blue: parseInt(set.match(/(?:(\d+) blue)/)?.[1] ?? "0"),
// 					}))
// 					.reduce((max, obj) => ({
// 						red: Math.max(max.red, obj.red),
// 						green: Math.max(max.green, obj.green),
// 						blue: Math.max(max.blue, obj.blue)
// 					}), { red: -Infinity, green: -Infinity, blue: -Infinity })
// 					.use(({red, green, blue}) => red * green * blue)
// 			) ?? 0
// 		)
// 		.reduce((prev, cur) => prev + cur)
// );