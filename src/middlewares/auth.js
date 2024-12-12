const jwt = require("jsonwebtoken");
const { HttpErrorMessage, HttpStatus } = require("../enums/http");
const { JWT_SECRET_KEY } = process.env;

const secretKey = JWT_SECRET_KEY;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer")) {
    return res
      .status(HttpStatus.FORBIDDEN)
      .json({ message: HttpErrorMessage.AUTHORIZATION_ERROR });
  }
  const token = authorization.replace("Bearer ", "");
  let payload;
  try {
    payload = jwt.verify(token, secretKey);
  } catch (error) {
    return res
      .status(HttpStatus.FORBIDDEN)
      .json({ message: HttpErrorMessage.AUTHORIZATION_ERROR });
  }

  req.user = payload;
  next();
};
