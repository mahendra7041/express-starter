const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class GoneException extends HttpException {
  constructor(objectOrError, descriptionOrOptions = "Gone") {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(objectOrError, description, HttpStatus.GONE),
      HttpStatus.GONE,
      httpExceptionOptions
    );
  }
};
