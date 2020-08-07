const UserModel = require("../models/UserModel");

// Retrieve all users from the database
exports.findAll = (req, res) => {
  UserModel.getAll((err, data) => {
    if (err) {
      res.status(500).send({ message: err.message });
      return res.end();
    }

    res.send(data);
  });
};

// Adds a new user to the dtabase
exports.addUser = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
  }

  console.log("req.body is ", req.body);

  const user = new UserModel({
    userName: req.body.userName,
    text: req.body.text,
  });

  UserModel.addUser(user, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user",
      });
      return res.end();
    }

    res.send(data);
  });
};
