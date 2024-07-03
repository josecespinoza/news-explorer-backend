const express = require("express");
const { getNews } = require("../controllers/news");
const router = express.Router();
const requestValidator = require("../middlewares/requestValidator");

router.get("/", requestValidator.getNews, getNews);

module.exports = router;
