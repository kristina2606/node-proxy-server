const { statusCodes, errorMessages } = require("../constants/constants");

const errorHandler = (error, request, response, next) => {
  const statusCode = error.statusCode || statusCodes.INTERNAL_SERVER_ERROR;
  const message = error.message || errorMessages.INTERNAL_SERVER_ERROR;

  response.status(statusCode).json({ error: message });
};

module.exports = errorHandler;
