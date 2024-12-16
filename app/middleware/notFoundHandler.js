const { statusCodes, errorMessages } = require("../constants/constants");

module.exports = (request, response) => {
  response
    .status(statusCodes.NOT_FOUND)
    .json({ message: errorMessages.NOT_FOUND });
};
