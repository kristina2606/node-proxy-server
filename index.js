const axios = require("axios");
const dotenv = require("dotenv");
const express = require("express");
const { getWeekDates } = require("./utils/utils");

dotenv.config();

const { NASA_API_KEY, NASA_API_URL, PORT } = process.env;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port...`);
});
const { startDate, endDate } = getWeekDates();

const url = `${NASA_API_URL}?start_date=${startDate}&end_date=${endDate}&api_key=${NASA_API_KEY}`;

axios
  .get(url)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error.message);
  });
