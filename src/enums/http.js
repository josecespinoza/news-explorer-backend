const HttpStatus = Object.freeze({
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
});

const HttpResponseMessage = Object.freeze({
  ARTICLE_WAS_CREATED: "The article was saved correctly",
  ARTICLE_WAS_DELETED: "The article was deleted correctly",
  USER_WAS_CREATED: "The user was saved correctly",
});

const HttpErrorMessage = Object.freeze({
  AUTHORIZATION_ERROR: "Authorization was not provided to do this action",
  USER_DOESNT_EXIST_ERROR: "This user doesn't exist",
});

module.exports = {
  HttpStatus,
  HttpResponseMessage,
  HttpErrorMessage,
};
