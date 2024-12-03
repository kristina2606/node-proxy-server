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

app.get("/", (request, response) => {
  response.send("Hello, welcome to NASA API!");
});

app.get("/meteors", async (request, response) => {
  try {
    const apiResponse = await axios.get(url);
    response.json(apiResponse.data.near_earth_objects);
  } catch (error) {
    console.log(`Error fetching data from NASA API:, ${error}`);
    response.status(500).send("Error fetching data from NASA API");
  }
});
