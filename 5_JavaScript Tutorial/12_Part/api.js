// 7. Accesing JSON Data

// json to javascript

// let jsonRes =
//   '{"fact":"Cats prefer to remain non-confrontational. They will not fight to show dominance, but rather to stake their territory. Cats will actually go to extremes to avoid one another in order to prevent a possible confrontation.","length":219}';

// let validRes = JSON.parse(jsonRes);

// console.log(validRes);

// // Java Script to JSON

// let student = {
//   name: "Mohammad",
//   marks: 25,
// };

// console.log(JSON.stringify(student));

// 14. api request

// let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//   })
//   .catch((err) => {
//     console.log("ERROR - ", err);
//   });

// 15. using fetch with async await

let url = "https://catfact.ninja/fact";

async function getFetch() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
  } catch (e) {
    console.log("Error - ", e);
  }
}
console.log(getFetch());
