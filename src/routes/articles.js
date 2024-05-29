const express = require("express");
const router = express.Router();
const {
  createArticle,
  deleteArticle,
  getArticles,
} = require("../controllers/articles");
const requestValidator = require("../middlewares/requestValidator");

router.post("/", requestValidator.createArticle, createArticle);
router.get("/", getArticles);
router.delete("/:cardId", deleteArticle);

module.exports = router;
