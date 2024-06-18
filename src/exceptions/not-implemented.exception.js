const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class NotImplementedException extends HttpException {
  constructor(objectOrError, descriptionOrOptions = "Not Implemented") {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.NOT_IMPLEMENTED
      ),
      HttpStatus.NOT_IMPLEMENTED,
      httpExceptionOptions
    );
  }
};
