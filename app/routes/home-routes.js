const express = require("express");
const { getHomePage } = require("../controllers/home.controller.js");

const router = express.Router();

router.get("/", getHomePage);

module.exports = router;
