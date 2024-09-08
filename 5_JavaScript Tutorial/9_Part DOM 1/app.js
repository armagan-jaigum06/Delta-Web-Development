// console.dir(document.querySelectorAll("p"));

// console.dir(document.querySelectorAll(".oldImg"));

// console.dir(document.querySelectorAll("div a"));

// let links = document.querySelectorAll(".box a")

// for(let i = 0; i< links.length; i++){
//     links[i].style.color = "green";
// }
// for(link of links){
//     link.style.color = "purple";  // inline style
// }

// let box = document.querySelector(".box");

// let newP = document.createElement("p");
// newP.innerText = "Hi I an New P!";
// box.appendChild(newP);

// let btn = document.createElement("button");
// btn.innerText = "Click me!"
// box.appendChild(btn);

// newP.append(btn)
// newP.append("hello What are you doing")

// box.prepend(newP);


let btn = document.createElement("button");
btn.innerText = "New Button";
let p = document.querySelector("p");

p.insertAdjacentElement("beforebegin", btn);
p.insertAdjacentElement("afterbegin", btn);
p.insertAdjacentElement("beforeend", btn);
p.insertAdjacentElement("afterend", btn);