const { ValidationError } = require("joi");
const { validationErrorParser } = require("../utils/validate");
const HttpStatus = require("../constants/http-status");

module.exports = class ValidationException extends Error {
  constructor(errors, statusCode = HttpStatus.UNPROCESSABLE_ENTITY) {
    super("Validation error");
    this.errors = errors;
    this.statusCode = statusCode;
  }
  static handler(error, req, res, next) {
    if (error instanceof ValidationException) {
      return res.status(error.statusCode).json({
        message: "Validation error",
        errors: error.errors,
      });
    }
    if (error instanceof ValidationError) {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        message: "Validation error",
        errors: validationErrorParser(error),
      });
    }
    next(error);
  }
};
