const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const type = types[i];
    const name = type.name.toLowerCase();
    if (typeof arg !== name) {
      throw new TypeError(`Argument type mismatch`);
    }
  }

  const result = fn(...args);
  const resultType = types[types.length - 1];
  const resultName = resultType.name.toLowerCase();

  if (typeof result !== resultName) {
    throw new TypeError(`Result type mismatch`);
  }

  return result;
};