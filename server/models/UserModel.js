const sql = require("./db.js");

// constructor
const User = function (user) {
  this.userName = user.userName;
  this.text = user.text;
};

// retrieve all users
User.getAll = (result) => {
  sql.query("SELECT * FROM Users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

// add a new user
User.addUser = (user, result) => {
  sql.query("INSERT INTO Users SET ?", user, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = User;
