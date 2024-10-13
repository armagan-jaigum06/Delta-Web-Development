const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use((req, res, next) => {
//   console.log("Hi I am middleware");
//   next();
// });

// Utility middleware > log infrmation

// app.use("/"(req, res, next) => {
//   req.time = new Date(Date.now()).toString();
//   console.log(req.url, req.method, req.hostname, req.path, req.time);
//   next();
// });

// api tocken activity

const checkToken =
  ("/api",
  (req, res, next) => {
    let { token } = req.query;
    if (token === "giveacces") {
      console.log(token);
      next();
    } else {
      throw new ExpressError(401, "ACCES DENIED!"); //creare by own a error
    }
  });

app.get("/api", checkToken, (req, res) => {
  res.send("Data Acces");
});

app.get("/", (req, res) => {
  res.send("Hi I am a root");
});

app.get("/random", (req, res) => {
  res.send("this is a random Page");
});

app.get("/err", (req, res) => {
  abc = abc;
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Acces to admin is Forbidden");
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Some error occured" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("Server listening to Port : 8080");
});
