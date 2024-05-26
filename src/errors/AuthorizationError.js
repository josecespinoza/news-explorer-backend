const HttpError = require("../errors/HttpError");
const { HttpStatus } = require("../enums/http");

class AuthorizationError extends HttpError {
  constructor(message) {
    const status = HttpStatus.UNAUTHORIZED;
    super(message, status);
    this.name = "AuthorizationError";
  }
}

module.exports = AuthorizationError;
