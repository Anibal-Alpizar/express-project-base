const express = require("express");
const morgan = require("morgan");

const app = express();

//settings
app.set("port", 3000);
app.set('case sensitive routing', true);

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get("/UserName", (req, res) => {
  res.send("username route");
});

app.listen(app.get("port"));
console.log(`server ${app.get("appName")} on port ${app.get("port")}`);
