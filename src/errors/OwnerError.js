const HttpError = require("./HttpError");
const { HttpStatus } = require("../enums/http");

class OwnerError extends HttpError {
  constructor(message) {
    const status = HttpStatus.UNAUTHORIZED;
    super(message, status);
    this.name = "OwnerError";
  }
}

module.exports = OwnerError;
