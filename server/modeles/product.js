const mongoose = require("mongoose");

const Product = mongoose.model(
  "product",
  new mongoose.Schema({
    id: String,
    title: String,
    imageUrl: String,
    desc: String,
    price: Number,
    size: [String],
  })
);

module.exports = Product
