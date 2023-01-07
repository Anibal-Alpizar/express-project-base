const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

//settings
app.set("port", 3000);

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.send("home");
});

console.log(__dirname);

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(app.get("port"));
console.log(`server ${app.get("appName")} on port ${app.get("port")}`);
