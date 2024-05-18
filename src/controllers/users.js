const User = require("../models/user");

module.exports.createUser = (req, res, next) => {
  const { username, email, password } = req.body;
  User.create({ username, email, password })
    .then((user) => {
      res.json({ message: "User was created" });
    })
    .catch((err) => {
      next(err);
    });
};
