const Joi = require("joi");

async function validate(body, schema, options = {}) {
  if (!schema)
    throw new Error("validate function second argument must be provided");
  if (schema instanceof Function) {
    schema = schema(Joi);
    if (!Joi.isSchema(schema))
      throw new Error("Validate callback must return joi schema");
  } else if (!Joi.isSchema(schema)) {
    throw new Error(
      "validate method second argument must be 'callback function' or 'joi schema' type"
    );
  }

  const validated = await schema.validateAsync(body, {
    abortEarly: false,
    stripUnknown: true,
    ...options,
  });

  return validated;
}

function validationErrorParser(error) {
  const errors = error.details.map((err) => {
    return { [err.context.key]: err.message };
  });
  return Object.assign({}, ...errors);
}

module.exports = {
  validate,
  validationErrorParser,
};
