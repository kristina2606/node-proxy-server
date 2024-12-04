require("dotenv").config();
const { config } = require("../constants/constants");

module.exports = {
  apiUrl: process.env.NASA_API_URL || config.NASA_API_URL,
  apiKey: process.env.NASA_API_KEY,
  port: process.env.PORT || config.PORT,
};
