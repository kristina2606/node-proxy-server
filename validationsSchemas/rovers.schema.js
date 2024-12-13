const Joi = require("joi");

const roverSchema = Joi.object({
  apiKey: Joi.string().required().messages({
    "string.base": "The apiKey must be a string.",
    "any.required": "The apiKey is required.",
  }),
});

module.exports = roverSchema;
