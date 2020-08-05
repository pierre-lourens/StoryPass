const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router.js");
const keys = require("./config/keys");

const app = express();

// TO-DO
// need to set up SQL database
// keep in mind that the config files for prod and dev are set up but empty

app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// for deployment purposes
if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// pass the express app to our routes
router(app);

// create and listen to the http server 
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);
