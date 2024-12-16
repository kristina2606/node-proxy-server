const config = {
  METEORS_URL: "/neo/rest/v1/feed",
  PORT: 4000,
  ROVER_PHOTO_URL: "/mars-photos/api/v1/rovers/curiosity/photos",
  SOL: 1000,
  BASE_NASA_API_URL: "https://api.nasa.gov",
  CAMERA: "FHAZ",
};

const statusCodes = {
  INTERNAL_SERVER_ERROR: 500,
  NOT_FOUND: 404,
  INVALID_DATE_RANGE: 400,
};

const errorMessages = {
  INTERNAL_SERVER_ERROR: "Something went wrong, please try again later.",
  NOT_FOUND: "Page not found.",
  INVALID_DATE_RANGE:
    "Please enter the date in the correct format (YYYY-MM-DD).",
};

const regex = {
  DATE_FORMAT: /^\d{4}-\d{2}-\d{2}$/,
};

module.exports = { config, statusCodes, errorMessages, regex };
