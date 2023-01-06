const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/miarchivo", (req, res) => {
  res.sendFile("./JavaScript.png", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "anibal",
    lastname: "ray",
    age: 40,
    points: [1, 2, 3],
    address: {
      city: "New York",
      street: "Some Street 123",
    },
  });
});

app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});

app.listen(3000);
console.log(`server on port ${3000}`);
