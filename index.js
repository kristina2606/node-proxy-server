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
    const meteors = result.data.near_earth_objects;
    const refactoredMeteors = Object.values(meteors).flatMap((day) =>
      day.map((meteor) => ({
        id: meteor.id,
        name: meteor.name,
        diameter_meters:
          meteor.estimated_diameter.meters.estimated_diameter_max,
        is_potentially_hazardous_asteroid:
          meteor.is_potentially_hazardous_asteroid,
        close_approach_date_full:
          meteor.close_approach_data[0]?.close_approach_date_full || null,
        relative_velocity_kps:
          meteor.close_approach_data[0]?.relative_velocity
            .kilometers_per_second || null,
      }))
    );

    response.status(200).json(refactoredMeteors);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});
