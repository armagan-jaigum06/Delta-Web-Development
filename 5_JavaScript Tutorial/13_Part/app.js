// let btn = document.querySelector("button");

// let url2 = "https://dog.ceo/api/breeds/image/random";

// // get random dog image

// btn.addEventListener("click", async () => {
//   let link = await getImage();
// //   console.log(link);

//   let img = document.querySelector("#result");
//   img.setAttribute("src", link);
// });

// async function getImage() {
//   try {
//     let res = await axios.get(url2);
//     return res.data.message;
//   } catch (e) {
//     console.log("error - ", e);
//     return "/";
//   }
// }

// Random Cat Facts

// btn.addEventListener("click", async () => {
//   let fact = await getFacts();
// //   console.log(fact);
//   let p = document.querySelector("#result");
//   p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (e) {
//     console.log("error - ", e);
//     return "No fact Found";
//   }
// }

// Sending header with api

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//   try {
//     const config = { headers: { Accept: "application/json" } };
//     let res = await axios.get(url, config);
//     console.log(res.data);
//   } catch (err) {
//     console.log(ree);
//   }
// }

// 4. search country

let url = "http://universities.hipolabs.com/search?country=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);

  let colleges = await getColleges(country);
  show(colleges);
});

function show(colleges) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of colleges) {
    console.log(col.name);

    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

async function getColleges(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (e) {
    console.log("error : ", e);
    return [];
  }
}

// 4. search college by state neme
