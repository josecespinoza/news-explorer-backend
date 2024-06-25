const { Joi, celebrate } = require("celebrate");

const requestValidator = {};

requestValidator.signIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

requestValidator.signUp = celebrate({
  body: Joi.object().keys({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

requestValidator.createArticle = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    publishDate: Joi.date().required(),
    source: Joi.string().required(),
    url: Joi.string().uri().required(),
    photo: Joi.string().uri().required(),
  }),
});

module.exports = requestValidator;
