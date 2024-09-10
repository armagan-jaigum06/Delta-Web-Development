let body = document.querySelector("body");

// let btn = document.createElement("button");

// btn.innerText = "Click me!";
// btn.addEventListener("click", function () {
//   btn.style.color = "green";
//   btn.style.backgroundColor = "pink";
// });
// body.append(btn);

// Question 3

body.addEventListener("submit", function (event) {
  event.preventDefault();
});
let headi = document.querySelector("h2");

let inp = document.querySelector("input");
inp.addEventListener("input", function () {
  headi.innerText = inp.value;
});
