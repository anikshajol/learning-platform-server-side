const express = require("express");
const app = express();

const cors = require("cors");

const products = require("./Data/product.json");

app.use(cors());

const Port = process.env.Port || 5000;

app.listen(Port, () => {
  console.log("object", Port);
});

app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/course", (req, res) => {
  res.send(products);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = products.find((product) => product.id == id);
  res.send(selectedCourse);
});

module.exports = app;
