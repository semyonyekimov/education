const arr = [1, 2, 3, 4];
const arr2 = [1, 2, -1, -3, 4, -10];
const arr3 = [1, 2, 3];

const mapFn = (callback, arr) => {
  const newArr = [];

  for (let i of arr) {
    newArr.push(callback(i));
  }

  return newArr;
};

const filterFn = (callback, arr) => {
  const newArr = [];

  for (let i of arr) {
    if (callback(i)) {
      newArr.push(i);
    }
  }

  return newArr;
};

const reduceFn = (callback, arr, initial) => {
  let acc = initial !== undefined ? initial : arr[0];

  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i]);
  }

  return acc;
};

const mapFnUsingReduce = (callback, arr) => {
  const newArr = arr.reduce((acc, x) => {
    acc.push(callback(x));
    return acc;
  }, []);

  return newArr;
};

const filterUsingReduce = (callback, arr) => {
  const newArr = arr.reduce((acc, x) => {
    if (callback(x)) {
      return acc.concat([x]);
    } else return acc;
  }, []);

  return newArr;
};

console.log(mapFn((x) => x * x, arr));

console.log(filterFn((x) => x > 0, arr2));

console.log(reduceFn((acc, x) => acc * x, arr3, 1));

console.log(mapFnUsingReduce((x) => x * x, arr));

console.log(filterUsingReduce((x) => x > 0, arr2));

//
