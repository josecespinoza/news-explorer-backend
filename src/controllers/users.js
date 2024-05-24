const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET_KEY || "somesecretkey";
const tokenDuration = process.env.JWT_TOKEN_DURATION || "1d";

module.exports.createUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hash });
    if (user) {
      res.json({ message: "User was created" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const storedUser = await User.findOne({ email }).select("+password");
    if (!storedUser) {
      throw new Error("User was not found");
    }
    const matched = await bcrypt.compare(password, storedUser.password);
    if (!matched) {
      throw new Error("Unauthorized");
    }
    const token = jwt.sign({ _id: storedUser._id }, secretKey, {
      expiresIn: tokenDuration,
    });
    res.json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports.getUserInfo = async (req, res, next) => {
  const currentUserId = req.user._id;
  try {
    const storedUser = await User.findById(currentUserId);
    if (!storedUser) {
      throw new NotFoundError(HttpErrorMessage.USER_DOESNT_EXIST_ERROR);
    }
    res.json(storedUser);
  } catch (err) {
    next(err);
  }
};
