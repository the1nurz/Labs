function max(matrix) {
  let maxValue = -Infinity;
  for (const row of matrix) {
    for (const num of row) {
      if (num > maxValue) {
        maxValue = num;
      }
    }
  }
  return maxValue;
}
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);