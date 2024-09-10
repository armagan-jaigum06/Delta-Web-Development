// event bubbling

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let list = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//   console.log("div was clicked");
// });

// ul.addEventListener("click", function (event) {
//     event.stopPropagation();
//   console.log("ul was clicked");
// });

// for (li of list) {
//   li.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("list was clicked");
//   });
// }

// Buildin Todo with DOM Activity

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let items = document.createElement("li");
  items.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  items.appendChild(delBtn);
  ul.appendChild(items);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});
