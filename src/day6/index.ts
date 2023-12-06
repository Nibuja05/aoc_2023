import { getInput, getInput2, getTestInput, getTestInput2 } from "./input";
import "../util";

console.log(getInput()
	.split("\n")
	.map(line => [...line.matchAll(/\d+/g)].map(match => parseInt(match[0])))
	.use(([times, distances]) => times.map((time, index) => [time, distances[index]]))
	.map(([duration, record]) => Array.from({length: duration - 1}, (_,i) => i + 1)
		.map(time => (duration - time) * time)
		.filter(distance => distance > record)
		.reduce(prev => prev + 1, 0)
	)
	.reduce((prev, cur) => prev * cur)
);

//TODO: Make more efficient!
console.log(getInput()
	.split("\n")
	.map(line => [...line.replaceAll(/\s/g, "").matchAll(/\d+/g)].map(match => parseInt(match[0])))
	.use(([times, distances]) => times.map((time, index) => [time, distances[index]]))
	.map(([duration, record]) => Array.from({length: duration - 1}, (_,i) => i + 1)
		.map(time => (duration - time) * time)
		.filter(distance => distance > record)
		.reduce(prev => prev + 1, 0)
	)
	.reduce((prev, cur) => prev * cur)
);