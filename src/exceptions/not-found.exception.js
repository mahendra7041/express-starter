const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class NotFoundException extends HttpException {
  constructor(objectOrError, descriptionOrOptions = "Not Found") {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.NOT_FOUND
      ),
      HttpStatus.NOT_FOUND,
      httpExceptionOptions
    );
  }
};
