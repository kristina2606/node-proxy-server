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

app.get("/meteors", async (request, response) => {
  try {
    const result = await axios.get(url);
    response.status(200).json(result.data);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});
