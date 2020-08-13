const PromptModel = require("../models/PromptModel");

// return a prompt from the prompts table
exports.getRandomPrompt = (req, res) => {
  PromptModel.getRandomPrompt((err, data) => {
    if (err) {
      res.status(500).send({ message: err.message });
      return res.end();
    }

    res.send(data);
  });
};

// save a new prompt
exports.addPrompt = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
  }

  const prompt = new PromptModel({
    text: req.body.text,
  });

  PromptModel.addPrompt(prompt, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the prompt",
      });
      return res.end();
    }
    console.log(data);

    res.send(data);
  });
};
