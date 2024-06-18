const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class MisdirectedException extends HttpException {
  constructor(objectOrError, descriptionOrOptions = "Misdirected") {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.MISDIRECTED
      ),
      HttpStatus.MISDIRECTED,
      httpExceptionOptions
    );
  }
};
