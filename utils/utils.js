const { isValidDate } = require("./validateDate");
const DateRangeException = require("./dateRangeException");
const { errorMessages, statusCodes } = require("../constants/constants");

function getWeekDates() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const monday = new Date(today);
  monday.setDate(today.getDate() - (dayOfWeek - 1));

  const friday = new Date(today);
  friday.setDate(monday.getDate() + 4);

  return {
    fromDate: monday.toLocaleDateString("en-CA"),
    toDate: friday.toLocaleDateString("en-CA"),
  };
}

function parseStringToBoolean(param) {
  if (param === undefined) return null;
  return param === "true";
}

function parseDateRange(date) {
  const { fromDate, toDate } = getWeekDates();
  let startDate = fromDate;
  let endDate = toDate;

  if (date) {
    if (Array.isArray(date)) {
      startDate = date[0];
      endDate = date[1];
    } else {
      startDate = date;
      endDate = date;
    }
  }

  if (!isValidDate(startDate) || !isValidDate(endDate)) {
    throw new DateRangeException(
      errorMessages.INVALID_DATE_RANGE,
      statusCodes.INVALID_DATE_RANGE
    );
  }

  return { startDate, endDate };
}

module.exports = { parseStringToBoolean, parseDateRange };
