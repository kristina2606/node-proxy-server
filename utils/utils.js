function getWeekDates() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);
  const startDate = sunday.toLocaleDateString("en-CA");

  const saturday = new Date(today);
  saturday.setDate(sunday.getDate() + 6);
  const endDate = saturday.toLocaleDateString("en-CA");

  return { startDate, endDate };
}

module.exports = { getWeekDates };
