const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection Sucessful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ralationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId, // for insert order id here
      ref: "Order",
    },
  ],
});

// Delete custome and order both 

// customerSchema.pre("findOneAndDelete", async () =>{  // no need to use this
//   console.log("PRE MIDDLEWARE")
// })

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// Populate find the data

const find = async () => {
  let res = await Customer.findOne({ name: "Tanweer Hasan" }).populate(
    "orders"
  );
  console.log(res);
};

// find();

const addCus = async () => {
  let newCus = new Customer({
    name: "Sahil",
  });

  let newOrder = new Order({
    item: "Burger",
    price: 50,
  });

  newCus.orders.push(newOrder);

  await newOrder.save();
  await newCus.save();

  console.log("Added new customer");
};

// addCus();

const deleCus = async () => {
  let delData = await Customer.findByIdAndDelete("67014cfe424809396519575d");
  console.log(delData);
};

deleCus();

// const addCustomer = async () => {
//   let cust1 = new Customer({
//     name: "Tanweer Hasan",
//   });
//   let order1 = await Order.findOne({ item: "Samosa" });
//   let order2 = await Order.findOne({ item: "Chips" });
//   let order3 = await Order.findOne({ item: "Coca-Cola" });
//   let order4 = await Order.findOne({ item: "Chocolate" });

//   cust1.orders.push(order1);
//   cust1.orders.push(order2);
//   cust1.orders.push(order3);
//   cust1.orders.push(order4);

//   let result = await cust1.save();
//   console.log(result);
// };

// // addCustomer();

// const addOrders = async () => {
//   let res = await Order.insertMany([
//     {
//       item: "Samosa",
//       price: 10,
//     },
//     {
//       item: "Chips",
//       price: 5,
//     },
//     {
//       item: "Coca-Cola",
//       price: 25,
//     },
//     {
//       item: "Chocolate",
//       price: 15,
//     },
//   ]);
//   console.log(res);
// };

// addOrders();
