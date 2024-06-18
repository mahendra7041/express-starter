const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class ForbiddenException extends HttpException {
  constructor(objectOrError, descriptionOrOptions = "Forbidden") {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.FORBIDDEN
      ),
      HttpStatus.FORBIDDEN,
      httpExceptionOptions
    );
  }
};
