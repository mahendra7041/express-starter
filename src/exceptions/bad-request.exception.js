const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class BadRequestException extends HttpException {
  constructor(objectOrError, descriptionOrOptions = "Bad Request") {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.BAD_REQUEST
      ),
      HttpStatus.BAD_REQUEST,
      httpExceptionOptions
    );
  }
};
