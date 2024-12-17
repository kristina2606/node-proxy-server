const validationHandler = (schema, property = "body") => {
  return (request, response, next) => {
    const data = request[property];
    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
      const errorMessages = error.details.map((error) => error.message);

      return response.status(400).json({ errorMessages });
    }

    next();
  };
};

module.exports = validationHandler;
