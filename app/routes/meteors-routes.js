const express = require("express");
const {
  getMeteors,
  getMeteorsView,
} = require("../controllers/meteors.controller");
const validationHandler = require("../middleware/validationHandler");
const meteorsSchema = require("../validationsSchemas/meteors.schema");

const router = express.Router();

router.get("/meteors", validationHandler(meteorsSchema, "query"), getMeteors);
router.get(
  "/meteors/html",
  validationHandler(meteorsSchema, "query"),
  getMeteorsView,
);

module.exports = router;
