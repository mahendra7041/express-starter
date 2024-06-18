const { validate } = require("../utils/validate");
const { createPostSchema } = require("../validations/post.validation");

async function create(req, res, next) {
  try {
    const body = await validate(req.body, createPostSchema);
    console.log("body", body);
    return res.json(body);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
};
