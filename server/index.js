const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");
const cors = require("cors");

const app = express();

// to prevent errors from cross origin requests
app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to storyPass application." });
});

router(app);

// set port, listen for requests
app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
