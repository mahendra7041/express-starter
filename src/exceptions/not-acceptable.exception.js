const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class NotAcceptableException extends HttpException {
  constructor(objectOrError, descriptionOrOptions = "Not Acceptable") {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.NOT_ACCEPTABLE
      ),
      HttpStatus.NOT_ACCEPTABLE,
      httpExceptionOptions
    );
  }
};
