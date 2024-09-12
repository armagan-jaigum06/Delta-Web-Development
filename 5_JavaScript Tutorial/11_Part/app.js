// 2. Visuilizing the Call Stack

// function one() {
//   return 1;
// }

// function two() {
//   return one() + one();
// }

// function three() {
//   let ans = two() + one();
//   console.log(ans);
// }

// three();

// 4. Singly thereted

// setTimeout(() => {
//   console.log("Mohammad");
// }, 2000);
// console.log("hello...")

// 5. Callback Hell

// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// // callback nesting -> callback hell

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("blue", 1000, () => {
//       changeColor("pink", 1000);
//     });
//   });
// });

// 6. Promises

// function savetoDb(data, sucess, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     sucess();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "Armagan Jaigum",
//   () => {
//     console.log("Sucess : Your Data Was Saved");
//     savetoDb(
//       "Jaigum",
//       () => {
//         console.log("Sucess 2: your data was saved");
//         savetoDb(
//           "bihar",
//           () => {
//             console.log("Sucess 3: your data was saved");
//           },
//           () => {
//             console.log("Falure: connection weak");
//           }
//             );
//       },
//       () => {
//         console.log("Failed: weak Connection");
//       }
//     );
//   },
//   () => {
//     console.log("Failure : week Connection. data not Saved");
//   }
// );

// 7. Promise Refactor in short

// function saveToDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("Sucess: data was saved");
//     } else {
//       reject("Reject: weak connection");
//     }
//   });
// }

// try and catch to avoid error 1 method

// saveToDb("Apna College")
//   .then(() => {
//     console.log("Promise was resolved");
//   })
//   .catch(() => {
//     console.log("Promise was reject");
//   });

// level up version of promise chaining method 2

// saveToDb("apna college")
//   .then((result) => {
//     console.log("data1 saved");
//     console.log("result of promise:", result);
//     return saveToDb("hello world");
//   })
//   .then((result) => {
//     console.log("data2 saved");
//     console.log("result of promise:", result);
//     return saveToDb("webdevelopment");
//   })
//   .then((result) => {
//     console.log("data3 saved");
//     console.log("result of promise:", result);
//   })
//   .catch((error) => {
//     console.log("romise was rejected");
//     console.log("error of promise:", error);
//   });

// Refactor ld color change code by using chaining

h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color cganged");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("red Color was completed");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("green Color was completed");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("blue color was completed");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("Orange color was completed");
  });
