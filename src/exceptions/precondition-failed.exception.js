const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class PreconditionFailedException extends HttpException {
  constructor(objectOrError, descriptionOrOptions = "Precondition Failed") {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.PRECONDITION_FAILED
      ),
      HttpStatus.PRECONDITION_FAILED,
      httpExceptionOptions
    );
  }
};
