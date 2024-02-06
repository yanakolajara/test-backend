const express = require("express");
const app = express();
const usersController = require("./usersControllers");
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("This is an app my dude.");
});

app.use(cors({ origin: "*" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Controll-Allow-Headers",
    "Origin, X-Requrested-With, Content-Type, Accept"
  );
  next();
});

app.use("/users", usersController);

module.exports = app;
