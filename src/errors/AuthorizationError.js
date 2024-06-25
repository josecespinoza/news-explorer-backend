const HttpError = require("../errors/HttpError");
const { HttpStatus, HttpErrorCode } = require("../enums/http");

class AuthorizationError extends HttpError {
  constructor(message) {
    const status = HttpStatus.UNAUTHORIZED;
    super(message, status);
    this.name = "AuthorizationError";
    this.errorCode = HttpErrorCode[this.name];
  }
}

module.exports = AuthorizationError;
