const { HttpStatus } = require("../enums/http");

module.exports = (err, req, res, next) => {
  res
    .status(err.status || HttpStatus.INTERNAL_SERVER_ERROR)
    .json({ message: err.message });
};
