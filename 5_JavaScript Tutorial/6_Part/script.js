// 1. Function in JS

// function hello() {
//     console.log("hello");
// }

// function printName() {
//     console.log("Mohammad");
// }
// hello();
// printName();
//
// 4. Function With Arguments

// function printName(name, age) {
//   console.log(name, age);
// }
// printName("Mohammad :", 22);

// function sum (a, b){
//     console.log(`Sum Of ${a} and ${b} is : ${a+b}`)
// }
// sum(2,6);

// 7. Return Function

// function sum(a, b) {
//   return a+b;
// }
// console.log(sum(2, 6));

// 12. Lexical Scope

// function outerFun() {
//     let x = 5;
//     let y = 6;
//     function innerFunc(){
//         console.log(x);
//     }
//     innerFunc();
// }

// 14. Function Expression

// let sum = function(a, b){
//     return a+b;
// }
// console.log(sum(2, 5));

// 15. Higher order Function

// function multipleGreet(func, count) {
//   for (let i = 1; i <= count; i++) {
//     func();
//   }
// }

// let greet = function () {
//   console.log("Hello!.");
// };

// multipleGreet(greet, 10);

// 16. Higher order Function Returns 

// function oddOrEvenFunc (request){
//     if(request == "odd"){
//         let odd = function(n){
//             console.log(!(n%2 == 0));
//         }
//         return odd;
//     } else if (request == "even"){
//         let even = function(n){
//             console.log(n%2 == 0);
//         }
//         return even;
//     } else {
//         console.log("you entered wrong input")
//     }
// }

// let request = "odd";
// let func = oddOrEvenFunc(request);
// console.log(func(5));

// 17. Methods 

// const calculator = {
//     sum: function(a, b){
//         return a+b;
//     },
//     sub: function(a, b){
//         return a-b;
//     },
//     mul(a, b){      // Or we use this also
//         return a*b;
//     },
//     div(a, b){
//         return a/b;
//     }
// }

// console.log(calculator.div(9,4));