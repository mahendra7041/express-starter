const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class ServiceUnavailableException extends HttpException {
  constructor(objectOrError, descriptionOrOptions = "Service Unavailable") {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.SERVICE_UNAVAILABLE
      ),
      HttpStatus.SERVICE_UNAVAILABLE,
      httpExceptionOptions
    );
  }
};
