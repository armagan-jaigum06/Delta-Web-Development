// Question 1

// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;

// element larger than a number num

// function getElements(arr, num){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }
// }
// getElements(arr, num);

// question 2

// let str = "abcdabcdefgggh";

// function getUnique(str){
//     let ans = "";
//     for(let i=0; i< str.length; i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1){
//             ans += currChar;
//         }
//     }
//     return ans;
// }

// console.log(getUnique(str));

// Question 3

// let country = ["Australia", "Germany", "United State of America"];

// function longestName(country){
//     let ansIdx = 0;
//     for(let i = 0; i< country.length; i++){
//         let ansLen = country[ansIdx].length;
//         let currLen = country[i].length;
//         if(currLen > ansLen){
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }

// console.log(longestName(country));

// Question 4

// let str = "abekljsdlfjed";

// function vowelCoun(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str.charAt(i) == "a" ||
//       str.charAt(i) == "e" ||
//       str.charAt(i) == "i" ||
//       str.charAt(i) == "o" ||
//       str.charAt(i) == "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(vowelCoun(str));

// Question 5

function generateRand(start, end){
    let diff = end - start;
    return Math.floor(Math.random()* diff) + start;
}

console.log(generateRand(50, 200));
