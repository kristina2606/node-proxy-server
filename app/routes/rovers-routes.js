const express = require("express");
const {
  getRoverPhoto,
  getRoverFormView,
  getRoverPhotoView,
} = require("../controllers/rovers.controller");
const validationHandler = require("../middleware/validationHandler");
const roverSchema = require("../validationsSchemas/rovers.schema");

const router = express.Router();

router.post("/rover-photo", validationHandler(roverSchema), getRoverPhoto);
router.get("/rover-form", getRoverFormView);
router.post(
  "/rover-photo/html",
  validationHandler(roverSchema),
  getRoverPhotoView,
);

module.exports = router;
