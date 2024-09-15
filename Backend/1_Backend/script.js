// let n = 5;

// for (let i = 0; i < n; i++) {
//   console.log("hello", i);
// }

// console.log("bye!");

// let args = process.argv;

// for (let i = 2; i < args.length; i++) {
//   console.log("Hello to ", args[i]);
// }

// 7. Module exports

// const someValue = require("./math");

// console.log(someValue);

// const math = require("./math");

// console.log(math.sum(2, 2));
// console.log(math.PI);

// 8. Export in other folder or directories

// const fruit = require("./Fruit");

// console.log(fruit);

// 13 . By using import module

import { sum, mul } from "./math.js";
console.log(sum(1, 3), mul(3, 2));

import { generate, count } from "random-words";

console.log(generate());
console.log(generate({ minLength: 11, maxLength: 10000 }));