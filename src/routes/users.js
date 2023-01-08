const { Router } = require("express");

const router = Router();

router.get("/username", (req, res) => {
  res.send("username route");
});

router.get("/profile", (req, res) => {
  console.log(req.body);
  res.send("profile route");
});

module.exports = router;
