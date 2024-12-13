const express = require("express");
const { getRoverPhoto } = require("../controllers/rovers.controller");
const validationHandler = require("../middleware/validationHandler");
const roverSchema = require("../validationsSchemas/rovers.schema");

const router = express.Router();

router.post("/rover-photo", validationHandler(roverSchema), getRoverPhoto);

module.exports = router;
