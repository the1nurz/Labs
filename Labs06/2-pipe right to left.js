const composeRight = (...fns) => {
  const handlers = [];

  const composed = (input) => {
    let result = input;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }
      return result;
    } catch (e) {
      handlers.forEach(fn => fn(e));
      return undefined;
    }
  };

  composed.on = (event, handler) => {
    if (event === 'error') {
      handlers.push(handler);
    }
  };

  return composed;
};