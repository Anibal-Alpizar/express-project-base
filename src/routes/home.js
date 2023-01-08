function homeRoutes(app) {
  app.get("/about", (req, res) => {
    res.send("about page");
  });

  app.get("/dashboard", (req, res) => {
    res.send("dashboard page");
  });
}

module.exports = homeRoutes;
