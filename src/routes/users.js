function UserRoutes(app) {
  app.get("/username", (req, res) => {
    res.send("username route");
  });

  app.get("/profile", (req, res) => {
    console.log(req.body);
    res.send("profile route");
  });
}

module.exports = UserRoutes;
