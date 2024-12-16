const axios = require("axios");
const config = require("../config/config");

const { baseNasaApiUrl, roverPhotoUrl, sol, camera } = config;

const getRoversPhotos = async (apiKey) => {
  const url = `${baseNasaApiUrl}${roverPhotoUrl}`;
  const result = await axios.get(url, {
    params: {
      sol,
      api_key: apiKey,
      camera,
    },
  });

  return result.data.photos;
};

module.exports = { getRoversPhotos };
