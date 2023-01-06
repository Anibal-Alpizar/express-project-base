const express = require("express");

const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/hello/:user", (req, res) => {
  console.log(typeof req.params.user);
  res.send(`hello ${req.params.user.toUpperCase()}`);
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  res.send(`Result: ${parseInt(x) + parseInt(y)}`);
});

app.get("/users/:username/photo", (req, res) => {
  if (req.params.username === "anibal") {
    return res.sendFile("./Javascript.png", {
      root: __dirname,
    });
  }
  res.send("el usuario no tiene acceso");
});

app.get('/name/:name/age/:age', (req,res)=>{
  res.send(`El usuario: ${req.params.name}, tiene ${req.params.age} de edad`)
})

app.listen(3000);
console.log(`server on port ${3000}`);
