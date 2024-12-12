const HttpError = require("../errors/HttpError");
const {
  HttpErrorMessage,
  HttpStatus,
  HttpErrorCode,
} = require("../enums/http");
const { NotFoundError } = require("../errors");

const router = require("express").Router();

router.all("*", (req, res, next) => {
  try {
    throw new NotFoundError(HttpErrorMessage.ROUTE_WAS_NOT_FOUND_ERROR);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
