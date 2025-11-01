function sumForOf(...args) {
  let total = 0;
  for (const num of args) {
    total += num;
  }
  return total;
}
 console.log(sumForOf(1, 2, 3, 4, 5));