const User = require("../models/UserModel");

// Retrieve all users from the database
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err) {
      res.status(500).send({ message: err.message });
      return res.end();
    }

    res.send(data);
  });
};
