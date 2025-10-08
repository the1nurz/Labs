function introspectFunctions(obj) {
  return Object.keys(obj)
    .filter(key => typeof obj[key] === 'function')
    .map(key => [key, obj[key].length]);
}
const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};
console.log(introspectFunctions(iface));
