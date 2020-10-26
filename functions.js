const arr = [1, 2, 3, 4];

const arr2 = [1, 2, -1, -3, 4, -10];

const arr3 = [1, 2, 3];

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

console.log(myMap((i) => i * i, arr));

console.log(myFilter((i) => i > 0, arr2));

console.log(myReduce((acc, i) => acc * i, arr3, 1));
