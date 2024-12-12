const HttpError = require("../errors/HttpError");
const { HttpStatus, HttpErrorCode } = require("../enums/http");

class DuplicateError extends HttpError {
  constructor(message) {
    const status = HttpStatus.CONFLICT;
    super(message, status);
    this.name = "DuplicateError";
    this.errorCode = HttpErrorCode[this.name];
  }
}

module.exports = DuplicateError;
