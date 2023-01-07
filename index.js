const express = require("express");

const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`Route: ${req.url}, method: ${req.method}`)
  next();
});

app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.listen(3000);
console.log(`server on port ${3000}`);
