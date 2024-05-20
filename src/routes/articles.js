const express = require("express");
const router = express.Router();
const { createArticle, deleteArticle } = require("../controllers/articles");

router.post("/", createArticle);
router.delete("/:cardId", deleteArticle);

module.exports = router;
