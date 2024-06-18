const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class MethodNotAllowedException extends HttpException {
  constructor(objectOrError, descriptionOrOptions = "Method Not Allowed") {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.METHOD_NOT_ALLOWED
      ),
      HttpStatus.METHOD_NOT_ALLOWED,
      httpExceptionOptions
    );
  }
};
