const express = require("express");
const {
  getMeteors,
  getMeteorsView,
} = require("../controllers/meteors.controller");

const router = express.Router();

router.get("/meteors", getMeteors);
router.get("/meteors/html", getMeteorsView);

module.exports = router;
