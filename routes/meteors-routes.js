const express = require("express");
const { getMeteors } = require("../controllers/meteors.controller");

const router = express.Router();

router.get("/meteors", getMeteors);

module.exports = router;
