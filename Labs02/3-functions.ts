import { oddRange } from "./2-loops.ts";

function average(a: number, b: number): number {
  return (a + b) / 2;
}

function square(x: number): number {
  return x * x;
}

function cube(x: number): number {
  return x * x * x;
}

function calculate(): number[] {
  const results: number[] = [];
  for (let i = 0; i <= 9; i++) {
    const sq = square(i);
    const cb = cube(i);
    const avg = average(sq, cb);
    results.push(avg);
    console.log(`i=${i}, square=${sq}, cube=${cb}, average=${avg}`);
  }
  return results;
}

console.log("Calculate results:", calculate());
console.log("Odd 15..30:", oddRange(15, 30));

