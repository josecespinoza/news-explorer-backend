const express = require("express");
const router = express.Router();
const {
  createArticle,
  deleteArticle,
  getArticles,
} = require("../controllers/articles");

router.post("/", createArticle);
router.get("/", getArticles);
router.delete("/:cardId", deleteArticle);

module.exports = router;
