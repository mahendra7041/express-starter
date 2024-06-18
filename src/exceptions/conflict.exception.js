const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class ConflictException extends HttpException {
  constructor(objectOrError, descriptionOrOptions = "Conflict") {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(objectOrError, description, HttpStatus.CONFLICT),
      HttpStatus.CONFLICT,
      httpExceptionOptions
    );
  }
};
