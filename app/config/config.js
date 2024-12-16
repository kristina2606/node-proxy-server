require("dotenv").config();
const { config } = require("../constants/constants");

module.exports = {
  meteorsUrl: process.env.METEORS_URL || config.METEORS_URL,
  apiKey: process.env.NASA_API_KEY,
  port: process.env.PORT || config.PORT,
  roverPhotoUrl: process.env.ROVER_PHOTO_URL || config.ROVER_PHOTO_URL,
  sol: process.env.SOL || config.SOL,
  camera: process.env.CAMERA || config.CAMERA,
  baseNasaApiUrl: process.env.BASE_NASA_API_URL || config.BASE_NASA_API_URL,
};
