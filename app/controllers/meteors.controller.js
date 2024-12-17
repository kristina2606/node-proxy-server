const service = require("../services/meteors.service");
const { parseStringToBoolean } = require("../utils/utils");

const getMeteors = async (request, response, next) => {
  try {
    const { date, count, wereDangerousMeteors } = request.query;

    const isDangerous = parseStringToBoolean(wereDangerousMeteors);
    const isCountRequested = parseStringToBoolean(count);

    const meteors = await service.getRefactoredMeteors(
      date,
      isDangerous,
      isCountRequested,
    );

    response.json(meteors);
  } catch (error) {
    next(error);
  }
};

const getMeteorsView = async (request, response, next) => {
  try {
    const { date, count, wereDangerousMeteors } = request.query;

    const isDangerous = parseStringToBoolean(wereDangerousMeteors);
    const isCountRequested = parseStringToBoolean(count);

    const meteors = await service.getRefactoredMeteors(
      date,
      isDangerous,
      isCountRequested,
    );

    response.render("meteors.html", { meteors });
  } catch (error) {
    next(error);
  }
};

module.exports = { getMeteors, getMeteorsView };
