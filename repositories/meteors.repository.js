const axios = require("axios");
const config = require("../config/config");

const { apiUrl, apiKey } = config;

const getMeteors = async (startDate, endDate) => {
  const url = `${apiUrl}?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;
  const result = await axios.get(url);

  return result.data.near_earth_objects;
};

module.exports = { getMeteors };
