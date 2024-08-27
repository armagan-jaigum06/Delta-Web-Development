// 2. Object literals

// const student = {
//     name: "Mohammad",
//     age: 23,
//     marks: 94.2
// };

// 3. Threads

// const post ={
//     username: "armagan__jaigum",
//     content: "This is my first post",
//     likes: 50,
//     reposts: 10,
//     tags: 10,
// };
// console.log(post);

// 6. Add Update Value

// const student ={
//     name: "Mohammad",
//     age: 23,
//     marks: 98.3,
//     city: "delhi"
// };
// student.city = "bihar"
// student.gender = "male"
// console.log(student);

// 7. Nested Object

// const classInfo = {
//   hashmi: {
//     grade: "A",
//     city: "Delhi",
//   },
//   Armagan: {
//     grade: "B",
//     city: "Patna",
//   },
//   Jaigum: {
//     grade: "B+",
//     city: "Bhagalpur",
//   }
// };

// 8. Array of object

// const classInfo = [
//   {
//     name: "hashmi",
//     grade: "A",
//     city: "Delhi",
//   },
//   {
//     name: "Armagan",
//     grade: "B",
//     city: "Patna",
//   },
//   {
//     name: "Jaigum",
//     grade: "B+",
//     city: "Bhagalpur",
//   },
// ];

// 10. RANDOM iNTEGER

// let step1 = Math.random();
// let step2 = step1 * 10;
// let step3 = Math.floor(step2);
// let step4 = step3 + 1;
// console.log(step4);

// let random = Math.floor(Math.random() * 10) + 1;
// console.log(random);

// 123. Guessing Game

// let range = prompt("enter the range of the number");

// let random = Math.floor(Math.random() * range) + 1;

// let guess = prompt("Guess the number");

// while (true) {
//   if (guess === "quit") {
//     console.log("user Quit");
//     break;
//   }

//   if (random == guess) {
//     console.log("Congratulation you guess write nu :", guess);
//     break;
//   } else if (random > guess) {
//     guess = prompt("hint: Your guess was to small  Guess Again");
//   } else {
//     guess = prompt("hint Your guess was to large  Guess Again");
//   }
// }
