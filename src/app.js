require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("./middlewares/cors");
const { createUser, login } = require("./controllers/users");
const articlesRouter = require("./routes/articles");
const usersRouter = require("./routes/users");
const auth = require("./middlewares/auth");
const nonexistent = require("./routes/non-existent");
const requestValidator = require("./middlewares/requestValidator");
const { errors } = require("celebrate");
const errorHandler = require("./middlewares/errorHandler");
const app = express();

const PORT = process.env.API_PORT || 3001;
const MONGO_DB_HOST =
  process.env.MONGO_DB_HOST || "mongodb://localhost:27017/newsdb";

app.use(bodyParser.json());

mongoose
  .connect(MONGO_DB_HOST)
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

app.post("/signup", requestValidator.signUp, createUser);
app.post("/signin", requestValidator.signIn, login);

app.use("/articles", auth, articlesRouter);
app.use("/users", auth, usersRouter);
app.use(errors());
app.use(nonexistent);
app.use(errorHandler);
