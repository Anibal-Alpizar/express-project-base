const { Router } = require("express");

const router = Router();

router.get("/about", (req, res) => {
  const title = "Page created from Express 1";
  res.render("index", { title });
});

router.get("/dashboard", (req, res) => {
  res.send("dashboard page");
});

module.exports = router;
