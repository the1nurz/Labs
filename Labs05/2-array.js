const array = () => {
  const arr = [];
  const api = (index) => {
    return arr[index];
  };
  api.push = (value) => {
    arr.push(value);
  };
  api.pop = () => {
    return arr.pop();
  };
  return api;
};
const arr = array();
arr.push('first');
arr.push('second');
arr.push('third');
console.log(arr(0)); 
console.log(arr(1)); 
console.log(arr(2)); 
