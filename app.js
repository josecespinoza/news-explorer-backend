const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3001;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

app.get("/test", (req, res) => {
  res.send({ message: "ok" });
});
