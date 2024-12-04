const service = require("../services/meteors.service");
const { getWeekDates } = require("../utils/utils");
const { isValidDate } = require("../utils/validateDate");
const DateRangeException = require("../utils/dateRangeException");
const { errorMessages, statusCodes } = require("../constants/constants");

const getMeteors = async (request, response, next) => {
  try {
    const { fromDate, toDate } = getWeekDates();

    const startDate = request.query.startDate || fromDate;
    const endDate = request.query.endDate || toDate;

    if (!isValidDate(startDate) || !isValidDate(endDate)) {
      throw new DateRangeException(
        errorMessages.INVALID_DATE_RANGE,
        statusCodes.INVALID_DATE_RANGE
      );
    }

    const meteors = await service.getRefactoredMeteors(startDate, endDate);

    response.json(meteors);
  } catch (error) {
    next(error);
  }
};

module.exports = { getMeteors };
