let body = document.querySelector("body");

let p = document.createElement("p");
p.innerText = "Hey I'm red";
body.append(p);
p.style.color = "red";

let h3 = document.createElement("h3");
h3.innerText = "i'm a blue h3!";
body.append(h3);

h3.style.color = "blue";

let div = document.createElement("div");
body.append(div);

let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
div.append(h1);

let p1 = document.createElement("p");
p1.innerText = "ME TOO!";
div.append(p1);

div.style.backgroundColor = "pink";
div.style.border = "2px solid black";
