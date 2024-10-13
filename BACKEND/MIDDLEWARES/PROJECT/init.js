const mongoose = require("mongoose");

const Chat = require("./models/chat.js");

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

Chat.insertMany([
  {
    from: "Priya",
    to: "Neha",
    msg: "send me your exam question paper",
    created_at: new Date(),
  },
  {
    from: "neha",
    to: "preeti",
    msg: "send the notes for the exam",
    created_at: new Date(),
  },
  {
    from: "rohit",
    to: "mihit",
    msg: "teach me js callback",
    created_at: new Date(),
  },
  {
    from: "amit",
    to: "sumit",
    msg: "all the best",
    created_at: new Date(),
  },
  {
    from: "rahul",
    to: "subhas",
    msg: "thank you",
    created_at: new Date(),
  },
  {
    from: "anil",
    to: "abhinas",
    msg: "what is the plan for tommorow",
    created_at: new Date(),
  },
]);
