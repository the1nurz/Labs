function range(start: number, end: number): number[] {
  const arr: number[] = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

export function oddRange(start: number, end: number): number[] {
  const arr: number[] = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) arr.push(i);
  }
  return arr;
}

console.log("Range 15..30:", range(15, 30));

