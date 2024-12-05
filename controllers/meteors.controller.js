const service = require("../services/meteors.service");
const { getWeekDates, parseStringToBoolean } = require("../utils/utils");
const { isValidDate } = require("../utils/validateDate");
const DateRangeException = require("../utils/dateRangeException");
const { errorMessages, statusCodes } = require("../constants/constants");

const getMeteors = async (request, response, next) => {
  try {
    const { fromDate, toDate } = getWeekDates();
    const { date, count, wereDangerousMeteors } = request.query;

    const isDangerous = parseStringToBoolean(wereDangerousMeteors);
    const isCountRequested = parseStringToBoolean(count);

    let startDate = fromDate;

    let endDate = toDate;

    if (date) {
      if (Array.isArray(date)) {
        startDate = date[0];
        endDate = date[1];
      } else {
        (startDate = date), (endDate = date);
      }
    }

    if (!isValidDate(startDate) || !isValidDate(endDate)) {
      throw new DateRangeException(
        errorMessages.INVALID_DATE_RANGE,
        statusCodes.INVALID_DATE_RANGE
      );
    }

    const meteors = await service.getRefactoredMeteors(startDate, endDate);
    let filteredData = meteors;

    if (isDangerous) {
      filteredData = meteors.filter(
        (meteor) => meteor.is_potentially_hazardous_asteroid === isDangerous
      );
    }

    if (isCountRequested) {
      return response.json({ count: filteredData.length });
    }

    response.json(filteredData);
  } catch (error) {
    next(error);
  }
};

module.exports = { getMeteors };
