const axios = require("axios");
const dotenv = require("dotenv");
const { getWeekDates } = require("./utils/utils");

dotenv.config();

const apiKey = process.env.NASA_API_KEY;
const apiUrl = process.env.NASA_API_URL;
const { startDate, endDate } = getWeekDates();

const url = `${apiUrl}?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;

axios
  .get(url)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error.message);
  });
