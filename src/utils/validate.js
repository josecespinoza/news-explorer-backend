const { OwnerError } = require("../errors");
const { HttpErrorMessage } = require("../enums/http");

const validate = {};

validate.crossUserAction = (userId, ownerId) => {
  if (!(userId === ownerId)) {
    throw new OwnerError(HttpErrorMessage.OWNER_ERROR);
  }
  return;
};

module.exports = validate;
