const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection Sucessful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ralationDemo");
}

const userSchema = new Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  let user1 = new User({
    username: "lokeshRahul",
    addresses: [
      {
        location: "22B4 baker Street",
        city: "Mumbai",
      },
    ],
  });
  user1.addresses.push({ location: "34F2 East Street", city: "Delhi" });
  let data = await user1.save();
  console.log(data);
};
addUsers();
