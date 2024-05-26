const HttpError = require("../errors/HttpError");
const { HttpStatus } = require("../enums/http");

class NotFoundError extends HttpError {
  constructor(message) {
    const status = HttpStatus.BAD_REQUEST;
    super(message, status);
    this.name = "NotFoundError";
  }
}

module.exports = NotFoundError;
