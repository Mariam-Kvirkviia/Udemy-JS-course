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
