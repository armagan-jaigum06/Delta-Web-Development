// async function greet() {
//   throw "404 page not found";
//   return "hello...";
// }

// greet()
//   .then((result) => {
//     console.log("Promise was resoved and result is: ", result);
//   })
//   .catch((error) => {
//     console.log("promise was reject with error:", error);
//   });

// 2. Await keyword

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
// }

// Again create color function by using async and await

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       console.log(`Color changed to ${color}`);
//       resolve("Color changed");
//     }, delay);
//   });
// }

// async function colorChange() {
//   try {
//     await changeColor("green", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("pink", 1000);
//     await changeColor("violet", 1000);
//     await changeColor("black", 1000);
//     await changeColor("red", 1000);
//   } catch (err) {
//     console.log("error");
//     console.log(err);
//   }
//   let a = 2;
//   console.log(a);
//   console.log(a + 5);
// }

