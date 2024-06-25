const express = require("express");
const router = express.Router();
const { getUserInfo } = require("../controllers/users");

router.get("/me", getUserInfo);

module.exports = router;
