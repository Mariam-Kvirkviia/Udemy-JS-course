/*import * as data from "./module.js";
console.log(data);
console.log("importing");

// FIBONACCI
let n = 0;
let m = 1;
let arr = [];
function fibb(x) {
  for (let i = 0; i <= x; i++) {
    arr.push(n);
    arr.push(m);
    n += m;
    m += n;
  }
  console.log(arr[x]);
}

fibb(3);
*/
/*

function anagram(x) {
  let sorted = x.map((el) => el.split("").sort().join(""));
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] !== sorted[0]) {
      return false;
    }
  }
  return true;
}

console.log(anagram(["fgn", "fng", "nggf"]));

function subset(x, y) {
  if (x.length < y.length) {
    return false;
  }
  for (let i = 0; i < y.length; i++) {
    let index = x.indexOf(y[i]);

    if (index === -1) {
      return false;
    }
    delete x[index];
  }
  return true;
}
console.log(subset([1, 4], [4, 4]));
*/
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(...matrix);
let arrB = [];
let arr1 = [];
let arr2 = [];
let arr3 = [];
matrix.forEach((el) => {
  arr1.unshift(el[0]);
  arr2.unshift(el[1]);
  arr3.unshift(el[2]);
});




function search(arr, target) {
  let i = arr.indexOf(target);
  if (i !== -1) {
    return i;
  } else {
    return -1;
  }
}
console.log(search([1, 3, 6, 8, 2, 34, 7], 12));
/*
let arr = [34, 67, 2, 75, 86].filter((el) => el % 2 == 1);
console.log(arr);
let min = Infinity;
let max = 0;
function findMin() {
  arr.forEach((el) => {
    if (el < min) {
      min = el;
    }
  });
  return min;
}
function findMax() {
  arr.forEach((el) => {
    if (el > max) {
      max = el;
    }
  });
  return max;
}
console.log(findMin(arr));
console.log(findMax(arr));
function add(...rest) {
  return rest.reduce((total, current) => total + current);
}
console.log(add(1, 2, 3, 4, 5));
let e = { f: 2, s: 3 };
let { f, s } = e;
let arr = [];
console.log(f, s);
let num = 1122255666666;
num = String(num);
let object = {};
function happyNumber(num) {
  num.split("").forEach((el) => {
    object[el] == undefined ? (object[el] = 1) : (object[el] += 1);
  });
  console.log(object);
  for (let [key] of Object.keys(object)) {
    if (object[key] == key) {
      arr.push(key);
      return Math.max(arr);
    }
  }

  return 0;
}
console.log(happyNumber(num));
*/
