// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//   btn.onclick = sayHello;
//   btn.onmouseenter = function () {
//     console.log("You enter a button");
//   };
// }
// function sayHello() {
//   alert("hello");
// }

// 3. Event listner

// for (btn of btns) {
//   //   btn.addEventListener("click", sayHello);
//   //   btn.addEventListener("click", sayName);
//   btn.addEventListener("dblclick", function () {
//     console.log("Yow Clicked 2 times");
//   });
// }

// function sayHello() {
//   alert("hello");
// }

// function sayName() {
//   alert("Mohammad");
// }

// 5. Event Literals

// let p = document.querySelector("p");

// p.addEventListener("click", function () {
//   console.log("Paragraph is clicked");
// });

// let box = document.querySelector(".box");

// box.addEventListener("mouseenter", function () {
//   console.log("Mouse inside box");
// });

// 6. this in event listeners

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let p = document.querySelector("p");

// function changeColor() {
//   console.log(this.innerText);
//   this.style.backgroundColor = "pink";
// }

// btn.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);

// 7. Keyword Event

// let btn = document.querySelector("button");

// btn.addEventListener("click", function (event) {  //Pointer Event
//   console.log(event);
//   console.log("Button clicked");
// });

// btn.addEventListener("dblclick", function (event) {  //Mouse Event
//   console.log(event);
//   console.log("Button clicked");
// });

// Keyword Event

let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//   console.log("Key = ", event.key);
//   console.log("Code = ", event.code);
//   console.log("key was Pressed");
// });

// inp.addEventListener("keyup", function () {
//   console.log("key was realesed");
// });

// inp.addEventListener("keypress", function (event) {
//   console.log("key was pressed");
// });

// inp.addEventListener("keydown", function (event) {
//   console.log("code =", event.code);
//   if (event.code == "KeyU") {
//     console.log("Character Move Up");
//   } else if (event.code == "KeyD") {
//     console.log("Character Move Down");
//   } else if (event.code == "ArrowLeft") {
//     console.log("Character Move Left");
//   } else if (event.code == "ArrowRight") {
//     console.log("Character Move right");
//   }
// });


