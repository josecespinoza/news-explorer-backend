require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("./middlewares/cors");
const { createUser, login } = require("./controllers/users");
const articlesRouter = require("./routes/articles");
const auth = require("./middlewares/auth");
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

app.use(cors);

app.post("/signup", createUser);
app.post("/signin", login);

app.use(auth);

app.use("/articles", articlesRouter);
