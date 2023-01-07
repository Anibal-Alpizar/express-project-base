const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan('dev'))

app.use("/profile/:user", (req, res) => {
  res.send(`Hello, ${req.params.user}!`);
});


// middleware 2
app.use((req, res, next) => {
  if (req.query.login === "anibal123") {
    next();
  } else {
    res.send("no autorizado");
  }
});

app.get("/dashboard", (req, res) => {
  res.send("dashboard page");
});

app.listen(3000);
console.log(`server on port ${3000}`);
