const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Product = require("./modeles/product.js");
const router = require("./router/routes.js");

const app = express();

app.use(bodyParser.json());
app.use("/", router);

const connectionSting = "mongodb://localhost/shopping-cart";
mongoose
  .connect(connectionSting, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Conected to DB"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server is Running");
});
