const express = require("express");
const { getRoverPhoto } = require("../controllers/rovers.controller");

const router = express.Router();

router.post("/rover-photo", getRoverPhoto);

module.exports = router;
