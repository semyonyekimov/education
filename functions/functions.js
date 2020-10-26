const myMap = (callback, arr) => {
  const newArr = [];
  for (let i of arr) {
    newArr.push(callback(i));
  }
  return newArr;
};

const myFilter = (callback, arr) => {
  const newArr = [];
  for (let i of arr) {
    if (callback(i)) {
      newArr.push(i);
    }
  }
  return newArr;
};

const myReduce = (callback, arr, initial) => {
  let acc = initial !== undefined ? initial : arr[0];
  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i]);
  }
  return acc;
};
