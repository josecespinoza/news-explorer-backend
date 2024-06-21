const { HttpStatus, HttpErrorCode } = require("../enums/http");

module.exports = (err, req, res, next) => {
  res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR).json({
    errorCode: err.errorCode || HttpErrorCode.DEFAULT_CODE,
    message: err.message,
  });
};
