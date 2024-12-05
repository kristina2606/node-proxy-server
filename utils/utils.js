function getWeekDates() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const monday = new Date(today);
  monday.setDate(today.getDate() - (dayOfWeek - 1));

  const friday = new Date(today);
  friday.setDate(monday.getDate() + 4);

  const fromDate = monday.toLocaleDateString("en-CA");
  const toDate = friday.toLocaleDateString("en-CA");

  return { fromDate, toDate };
}

function parseStringToBoolean(param) {
  if (param === undefined) return null;
  return param === "true";
}

module.exports = { getWeekDates, parseStringToBoolean };
