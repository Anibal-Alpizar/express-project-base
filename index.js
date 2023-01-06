const express = require("express");

const app = express();

app.get("/products", (req, res) => {
  // validate data
  // query a base de datos
  // process data
  res.send("lista de productos");
});

app.post("/products", (req, res) => {
  res.send("creado productos");
});

app.put("/products", (req, res) => {
  res.send("actualizando producto");
});

app.delete("/products", (req, res) => {
  res.send("eliminando un producto");
});

app.patch("/products", (req, res) => {
  res.send("actualizando una parte del producto");
});

app.listen(3000);
console.log(`server on port ${3000}`);
