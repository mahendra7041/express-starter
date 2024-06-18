const Joi = require("joi");

const createPostSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().valid("published", "draft").default("published"),
});

module.exports = {
  createPostSchema,
};
