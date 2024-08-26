// 1. Loops

// for (let i = 1; i <= 50; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// 3. Odd Number

// for (let i = 1; i <= 15; i = i + 2) {
//   console.log(i);
// }

// 4. Even Number

// for (let i = 2; i <= 20; i = i + 2) {
//   console.log(i);
// }

// console.log("backward Direction");

// for (let i = 20; i >= 1; i = i - 2) {
//   console.log(i);
// }

// 6. Multiplicati0on Table

// for (let i = 5; i <= 50; i = i + 5) {
//   console.log(i);
// }

// let num = prompt("Write Your Number");
// num = parseInt(num);

// for (let i = num; i <=num*10; i = i + num) {
//   console.log(i);
// }

// 7. Nested For loop

// for (let i = 1; i <= 4; i++) {
//   console.log(`Outer Loop ${i}`);
//   for (let i = 1; i <= 4; i++) {
//     console.log(i);
//   }
// }

// 8. While Loop

// let i = 1;
// while (i <= 6) {
//   console.log(i);
//   i++;
// }

// 9. Guess Favorite Movie

// let myFavMovie = "Jawan";

// let guess = prompt("Guess my favourite movie");

// while (myFavMovie != guess && guess != "quit") {
//   guess = prompt("Sorry you enterd wrong guess again!");
// }

// if (myFavMovie === guess) {
//   console.log("Congratulation!");
// }

// 11. Loops With Array

// let fruits = ["Mango", "Banana", "Apple", "Orange"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(i, fruits[i]);
// }

// 12.Nested Array

// let fruits = [
//   ["Mango", "Banana", "Apple", "Orange"],
//   ["Gauva", "Papaya", "Pineapple", "Litchi"],
// ];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i], fruits[i].length);
//   for (let j = 0; j < fruits[i].length; j++) {
//     console.log(`j = ${j}, ${fruits[i][j]}`);
//   }
// }

// 13. For Of Loop

// let fruits = ["Mango", "Banana", "Apple", "Orange"];

// for (fruit of fruits) {
//   console.log(fruit);
// }

// for(char of "Mohammad"){
//     console.log(char);
// }

// 14. Nested For of loop

// let fruits = [["Mango", "Banana", "Apple", "Orange"],["Gauva", "Papaya", "Pineapple", "Litchi"]];

// for(list of fruits){
//     for(frut of list){
//         console.log(frut);
//     }
// }