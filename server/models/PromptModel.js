const sql = require("./db.js");

// constructor
const Prompt = function (prompt, result) {
  this.prompt = prompt.text;
};

// retrieve a random prompts
Prompt.getRandomPrompt = (result) => {
  sql.query("SELECT * FROM prompts ORDER BY RAND() LIMIT 1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    // return the whole prompt object, in case we want it to have more properties than text
    result(null, res[0]);
  });
};

// add a new prompt
Prompt.addPrompt = (prompt, result) => {
  sql.query("INSERT INTO prompts SET ?", prompt, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = Prompt;
