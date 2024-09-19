const express = require("express");
const app = express();

let port = 8080; //3000 or

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

// 3. rd this

app.get("/", (req, res) => {
  res.send("Hello i am a root");
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`Welcome to the page of @${username}!`);
});
// For Quary Search
app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("Search not exist");
  }
  res.send(`<h1>search reasult for quary: ${q}</h1>`);
});

// 2.Second this

// app.get("/", (req, res) => {
//   res.send("Hello i am a root");
// });

// app.get("/apple", (req, res) => {
//   res.send({
//     name: "apple",
//     color: "red",
//   });
// });

// app.get("/orange", (req, res) => {
//   res.send("You Contact orange path");
// });

// app.get("*", (req, res) => {
//   res.send("this path doesnot exists");
// });

// app.post("/", (req, res) =>{
//   res.send("You are in port")
// })

// 1. First this

// app.use((req, res) => {
//   console.log("request recieved");
//   // res.send({
//   //   name: "apple",
//   //   color: "red",
//   // });
//   let code = "<h1>Fruits</h1> <ul><li>apple</li><li>apple</li></ul>";
//   res.send(code);
// });
