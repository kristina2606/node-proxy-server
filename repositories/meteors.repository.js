const axios = require("axios");
const config = require("../config/config");

const { apiUrl, apiKey } = config;

const getMeteors = async (startDate, endDate) => {
  const result = await axios.get(apiUrl, {
    params: {
      start_date: startDate,
      end_date: endDate,
      api_key: apiKey,
    },
  });

  return result.data.near_earth_objects;
};

module.exports = { getMeteors };
