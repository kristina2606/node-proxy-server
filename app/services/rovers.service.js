const repository = require("../repositories/rovers.repository");

const getLatestRoverPhoto = async (apiKey) => {
  const roversPhotos = await repository.getRoversPhotos(apiKey);

  if (!roversPhotos || roversPhotos.length === 0) {
    return null;
  }

  const latestRover = roversPhotos[roversPhotos.length - 1];

  return latestRover.img_src;
};

module.exports = { getLatestRoverPhoto };
