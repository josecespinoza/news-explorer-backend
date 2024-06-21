const HttpError = require("./HttpError");
const { HttpStatus, HttpErrorCode } = require("../enums/http");

class OwnerError extends HttpError {
  constructor(message) {
    const status = HttpStatus.UNAUTHORIZED;
    super(message, status);
    this.name = "OwnerError";
    this.errorCode = HttpErrorCode[this.name];
  }
}

module.exports = OwnerError;
