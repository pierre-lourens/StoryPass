module.exports = function (app) {
  // USER ROUTES
  const users = require("./controllers/UserController");
  const prompts = require("./controllers/PromptsController");

  // retrieve all users
  app.get("/api/users", users.findAll);

  // add a user's contribution to story
  app.post("/api/users", users.addText);

  // return a prompt from the prompts table
  app.get("/api/prompt", prompts.getRandomPrompt);

  // save a new prompt
  app.post("/api/prompt", prompts.addPrompt);

  app.use((req, res) => {
    res.status(404).send("404 error! Resource not found.");
  });
};
