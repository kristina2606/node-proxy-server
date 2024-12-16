const axios = require("axios");
const config = require("../config/config");

const { baseNasaApiUrl, meteorsUrl, apiKey } = config;

const getMeteors = async (startDate, endDate) => {
  const url = `${baseNasaApiUrl}${meteorsUrl}`;
  const result = await axios.get(url, {
    params: {
      start_date: startDate,
      end_date: endDate,
      api_key: apiKey,
    },
  });

  return result.data.near_earth_objects;
};

module.exports = { getMeteors };
