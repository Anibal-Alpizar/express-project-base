const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/weather", (req, res) => {
  res.send("The current weather is nice");
});

app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(3000);

console.log(`server on port ${3000}`);
