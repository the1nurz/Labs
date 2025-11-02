const seq = (...args) => {
  const fns = [...args];
  const next = (...nextArgs) => {
    if (typeof nextArgs[0] === 'number') {
      return fns.reduce((acc, fn) => fn(acc), nextArgs[0]);
    } else {
      fns.push(...nextArgs);
      return next;
    }
  };
  return next;
};
console.log(
  seq(x => x + 7)
     (x => x * 2)(5)
); 