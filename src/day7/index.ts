import { getInput, getInput2, getTestInput, getTestInput2 } from "./input";
import "../util";

/** Idee:
 * Zählen von Vorkommen => Sortieren => nur erste 2 Vorkommen relevant (1. am relevantesten)
 * Wins Zahl zuweisen => vor Hand einfügen
 * Arrays sortieren
 * Index = Rang
 */
console.log(getInput()
	.split("\n")
	.map(line => line.split(" ").use(([hand, bid]) => <const>[
		hand.split("").map(char => /\d/.test(char)? parseInt(char) 
			: {"T":"a","J":"b","Q":"c","K":"d","A":"e"}[char]!)
		, parseInt(bid)
	]))
	.map(([hand, bid]) => <const>[hand, bid, 
		Object.values(hand.reduce((acc, num) => (acc[num] = (acc[num] || 0) + 1, acc), {} as Record<string, number>))
		.filter(count => count > 1)
		.sort((a,b) => b - a)
		.use(([win1, win2]) => win1 == 5
			? 6 : win1 == 4
				? 5 : win1 == 3 && win2 == 2
					? 4 : win1 == 3
						? 3 : win1 == 2 && win2 == 2
							? 2 : win1 == 2
								? 1 : 0
		)
	])
	.map(([hand, bid, wins]) => <const>[[wins, ...hand], bid])
	.sort()
	.map(([_, bid], index) => bid * (index + 1))
	.reduce((prev, cur) => prev + cur)
);

/** Zusätzliche Idee:
 * Joker seperat zählen => später auf erste Stelle addieren
 * Joker == 0, damit am wenigsten wertig
 */
console.log(getInput()
	.split("\n")
	.map(line => line.split(" ").use(([hand, bid]) => <const>[
		hand.split("").map(char => /\d/.test(char)? parseInt(char) 
			: {"T":"a","J":0,"Q":"c","K":"d","A":"e"}[char]!)
		, parseInt(bid)
	]))
	.map(([hand, bid]) => <const>[hand, bid, 
		hand.reduce((acc, num) => (acc[num] = (acc[num] || 0) + 1, acc), {} as Record<string, number>)
		.use(occurances => Object.entries(occurances)
			.filter(([key, _]) => key != "0")
			.map(([_, val]) => val)
			.sort((a,b) => b - a)
			.use(([win1, win2]) => 
				((win1 ?? 0) + (occurances[0] ?? 0)) == 5
					? 6 : ((win1 ?? 0) + (occurances[0] ?? 0)) == 4
						? 5 : ((win1 ?? 0) + (occurances[0] ?? 0)) == 3 && (win2 ?? 0) == 2
							? 4 : ((win1 ?? 0) + (occurances[0] ?? 0)) == 3
								? 3 : ((win1 ?? 0) + (occurances[0] ?? 0)) == 2 && (win2 ?? 0) == 2
									? 2 : ((win1 ?? 0) + (occurances[0] ?? 0)) == 2
										? 1 : 0
			)
		)
	])
	.map(([hand, bid, wins]) => <const>[[wins, ...hand], bid])
	.sort()
	.map(([_, bid], index) => bid * (index + 1))
	.reduce((prev, cur) => prev + cur)
);