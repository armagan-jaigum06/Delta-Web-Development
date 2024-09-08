// Array Methods > For Each

// let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((el) => {
//   console.log(el);
// });

// arr.forEach(function (el) {
//   console.log(el);
// });

let students = [
  {
    name: "Mohammad",
    marks: 75,
  },
  {
    name: "Armagan",
    marks: 89.4,
  },
  {
    name: "Hashmi",
    marks: 90.4,
  },
];

// students.forEach((student) => {
//   console.log(student.name);
// });

// 2. Map And Filter

// let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//   return el * 2;
// });

// let gpa = students.map((el) => {
//   return el.marks / 10;
// });

// Filter

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 56, 32, 23, 67];

// let ans = nums.filter((el) => {
//   return el % 2 == 0;
// });

// Every

// let ans = [2, 4, 6, 8].every((el) => el % 2 == 0);

//  Reduce

// let nums = [2, 4, 6, 8];
// let ans =nums.reduce((res, el) => res+el);

//  Default value

// function sum(a, b = 2) {
//   return a + b;
// }

// console.log(sum(1,6

// ));

// 10 Spread Object

// console.log(..."MOHAMMAD ARMAGAN JAIGUM");

// const data = {
//   email: "ironman@gmail.com",
//   pasword: "abcs",
// };

// const dataCopy = {...data, id: 123, country: "india"};

// 11. Rest

// function sum(...args) {
//   return args.reduce((add, el) => add + el);
// }

// 12. Destructuring

// let name = ["tony", "bruce", "steve", "peter"];
// let [winner, runnerup] = name;
// console.log(winner, runnerup);

// const student = {
//   name: "Mohammad",
//   age: 22,
//   class: 9,
//   username: "abc@gmail.com",
//   password: "abcd",
// };

// let { name, age, ...other } = student;
