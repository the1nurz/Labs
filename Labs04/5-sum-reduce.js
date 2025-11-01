function sumReduce(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

 console.log(sumReduce(1, 2, 3, 4, 5));