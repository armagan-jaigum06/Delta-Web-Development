const mongoose = require("mongoose");

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.findOneAndDelete({ name: "Eve" }).then((res) => {
  console.log(res);
});

// User.deleteOne({ name: "Bruce" }).then((res) => {
//   console.log(res);
// });

// User.findByIdAndUpdate(
//   { _id: "66f84ddf299396ba02b1847b" },
//   { age: 29 },
//   { new: true }
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndUpdate({ name: "Bruce" }, { age: 35 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateOne({ name: "Bruce" }, { age: 49 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.find({ age: { $gt: 38 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const user1 = new User({
//   name: "Adam",
//   email: "adam@gmail.com",
//   age: 34,
// });
// const user2 = new User({
//   name: "Eve",
//   email: "eve@google.com",
//   age: 48,
// });

// user1.save();
// user2.save();

//  Inserty many

// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 50 },
//   { name: "Bruce", email: "bruce@gmail.com", age: 47 },
//   { name: "Peter", email: "peter@gmail.com", age: 30 },
// ]).then((data) => {
//   console.log(data);
// });
