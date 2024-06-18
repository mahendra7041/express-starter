const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class InternalServerErrorException extends HttpException {
  constructor(objectOrError, descriptionOrOptions = "Internal Server Error") {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.INTERNAL_SERVER_ERROR
      ),
      HttpStatus.INTERNAL_SERVER_ERROR,
      httpExceptionOptions
    );
  }
};
