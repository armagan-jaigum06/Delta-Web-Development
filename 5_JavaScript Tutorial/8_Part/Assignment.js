// Question 1

// let nums = [3, 4, 7, 2, 8];

// let square = nums.map((el) => el * el);
// console.log(square);

// let sum = nums.reduce((ans, el) => ans + el);
// console.log(sum);

// let avg = sum / nums.length;
// console.log(avg);

// Question 2

// let nums = [3, 4, 7, 2, 8];

// let sum5 = nums.map((el) => el + 5);
// console.log(sum5);

// Question 3

// let strings = ["what", "is", "your", "name"];

// let ans = strings.map((el) => el.toUpperCase());
// console.log(ans);

// Question 4

// const doubleAndReturnsArgs = (arr, ...args) => [
//   ...arr,
//   ...args.map((v) => v * 2),
// ];
// console.log(doubleAndReturnsArgs([1, 2, 3], 8, 8));

// Question 5

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObjects({ a: 2, b: 4 }, { c: 4, d: 5 }));
