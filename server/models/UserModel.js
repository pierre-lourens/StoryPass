const sql = require("./db.js");

// constructor
const User = function (user) {
  this.userName = customer.userName;
  this.text = customer.text;
};

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

module.exports = User;
