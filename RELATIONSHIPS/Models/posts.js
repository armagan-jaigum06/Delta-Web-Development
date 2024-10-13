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
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});



const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
    // let user1 = new User({
    //   username: "Mohit",
    //   email: "mohit@gmail.com",
    // });

    // let post1 = new Post({
    //   content: "Life is Very Beautiful Enjoy so Enjoy Every Moment of Your Life",
    //   likes: 10,
    // });
    // post1.user = user1;

    // await user1.save();
    // await post1.save();

  // for add more data

    let user = await User.findOne({ username: "Mohit" });
    let post2 = new Post({
      content: "Bye Bye",
      likes: 11,
    });
    post2.user = user;

    await post2.save();

  //   for add 2nd user and save data

  //   let user2 = new User({
  //     username: "Khapra",
  //     email: "khapra@gmail.com",
  //   });

  // let user2 = await User.findOne({ username: "Khapra" });

  //   let post1 = new Post({
  //     content: "If you put your affort in coading then you become a good coader",
  //     likes: 30,
  //   });
  //   post1.user = user2;

  //   await user2.save();
  //   await post1.save();

  // let post2 = new Post({
  //   content: "Be Serious",
  //   likes: 10,
  // });
  // post2.user = user2;

  // await post2.save();
};

// addData();

const getData = async () => {
  let result = await Post.find({}).populate("user");
  console.log(result);
};

// getData();


