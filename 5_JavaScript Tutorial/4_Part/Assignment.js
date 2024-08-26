// Question 1

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === num) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);

// Question 2

// let num = 287152;
// let count = 0;

// let copy = num;

// while(copy > 0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);

// Question 3

// let num = 287152;
// let sum = 0;

// let copy = num;

// while (copy > 0) {
//   digit = copy % 10;
//   sum += digit;
//   copy = Math.floor(copy / 10);
// }
// console.log(sum);

// Question 4

// let n = 5;
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//   factorial *= i;
// }
// console.log(`${n}! factorial is: ${factorial}`);

// Quetion 5

let arr = [1, 12, 3, 34, 5, 6, 82, 83];
let largest = 0;

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(largest);
