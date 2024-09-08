// find Maximum by normal Method

// let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2,8];

// let max = -1;

// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// find Maximum by Reduce Method

// let ans = arr.reduce((max, el) => {
//   if (max < el) {
//     return el;
//   } else {
//     return max;
//   }
// });

// console.log(ans);

// Practice QS check multiple of 10

// let arr = [10, 20, 40, 60];

// let ans = arr.every((el) => el % 10 == 0);

// console.log(ans);

// min nu of an array

// function getMin(nums) {
//   let ans = nums.reduce((min, el) => {
//     if (min < el) {
//       return min;
//     } else {
//       return el;
//     }
//   });
//   return ans;
// }

// let arr = [4, 8, 4, 9, 1, 8, 0];

// console.log(getMin(arr));
