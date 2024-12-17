const { regex } = require("../constants/constants");

const isValidDate = (dateString) => {
  if (!dateString.match(regex.DATE_FORMAT)) {
    return false;
  }

  const date = new Date(dateString);

  return date instanceof Date && !isNaN(date);
};

module.exports = { isValidDate };
