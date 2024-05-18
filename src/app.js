const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { createUser } = require("./controllers/users");
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/newsdb")
  .then((res) => {
    console.log("Successfully connected to mongodb");
  })
  .catch((err) => {
    console.log("There was an error connecting to db");
  });

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

app.use("/signup", createUser);

app.get("/test", (req, res) => {
  res.send({ message: "ok" });
});
