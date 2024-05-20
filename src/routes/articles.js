const express = require("express");
const router = express.Router();
const { createArticle } = require("../controllers/articles");

router.post("/", createArticle);

module.exports = router;
