const express = require("express");
const Product = require("../modeles/product")
const router = express.Router();

router.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

router.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const saveData = await newProduct.save();
  res.send(saveData);
});

router.delete("/api/products/:id", async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  res.send(product);
});

module.exports = router
