const Joi = require("joi");

const meteorsSchema = Joi.object({
  date: Joi.string().isoDate().optional().messages({
    "string.base": "Count must be a string type",
    "string.isoDate": "The date must be a valid ISO date format (YYYY-MM-DD).",
  }),

  count: Joi.string().valid("true", "false").optional().messages({
    "string.base": "Count must be a string type",
    "any.only": 'Count value could be only "true" or "false"',
  }),

  wereDangerousMeteors: Joi.string()
    .valid("true", "false")
    .optional()
    .messages({
      "string.base": "The wereDangerousMeteors must be a string.",
      "any.only":
        'The wereDangerousMeteors value could be only "true" or "false".',
    }),
});

module.exports = meteorsSchema;
