const { getLatestRoverPhoto } = require("../services/rovers.service");

const getRoverPhoto = async (request, response, next) => {
  try {
    const { apiKey } = request.body;

    const latestPhoto = await getLatestRoverPhoto(apiKey);

    response.json(latestPhoto);
  } catch (error) {
    next(error);
  }
};

module.exports = { getRoverPhoto };
