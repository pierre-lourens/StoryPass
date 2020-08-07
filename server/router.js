module.exports = function (app) {
  // USER ROUTES
  const users = require("./controllers/UserController");

  // retrieve all users
  app.get("/users", users.findAll);

  app.use((req, res) => {
    res.status(404).send("404 error! Resource not found.");
  });
};
