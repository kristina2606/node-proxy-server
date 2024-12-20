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

const getRoverFormView = async (request, response, next) => {
  try {
    response.render("roverForm.html");
  } catch (error) {
    next(error);
  }
};

const getRoverPhotoView = async (request, response, next) => {
  try {
    const { apiKey } = request.body;

    const latestPhoto = await getLatestRoverPhoto(apiKey);

    response.render("roverPhoto.html", { latestPhoto });
  } catch (error) {
    next(error);
  }
};

module.exports = { getRoverPhoto, getRoverFormView, getRoverPhotoView };
