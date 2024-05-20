const Article = require("../models/article");
const { HttpResponseMessage } = require("../enums/http");

module.exports.createArticle = (req, res, next) => {
  const currentUserId = req.user._id;
  const { keyword, title, description, publishDate, source, photo } = req.body;

  Article.create({
    keyword,
    title,
    description,
    publishDate,
    source,
    photo,
    owner: currentUserId,
  })
    .then((article) => {
      res.json({ message: HttpResponseMessage.ARTICLE_WAS_CREATED, article });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.getArticles = async (req, res, next) => {
  const currentUserId = req.user._id;
  try {
    const articles = await Article.find({ owner: currentUserId });
    res.json(articles);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteArticle = async (req, res, next) => {
  const { cardId } = req.params;
  try {
    await Article.deleteOne({ _id: cardId });
    res.json({ message: HttpResponseMessage.ARTICLE_WAS_DELETED });
  } catch (err) {
    next(err);
  }
};