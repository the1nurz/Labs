const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('Argument is not a function');
    }
  }
  return (x) => fns.reduce((v, f) => f(v), x);
};