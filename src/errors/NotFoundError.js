const HttpError = require("../errors/HttpError");
const { HttpStatus, HttpErrorCode } = require("../enums/http");

class NotFoundError extends HttpError {
  constructor(message) {
    const status = HttpStatus.NOT_FOUND;
    super(message, status);
    this.name = "NotFoundError";
    this.errorCode = HttpErrorCode[this.name];
  }
}

module.exports = NotFoundError;
