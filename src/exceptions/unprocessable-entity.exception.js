const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class UnprocessableEntityException extends HttpException {
  constructor(objectOrError, descriptionOrOptions = "Unprocessable Entity") {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.UNPROCESSABLE_ENTITY
      ),
      HttpStatus.UNPROCESSABLE_ENTITY,
      httpExceptionOptions
    );
  }
};
