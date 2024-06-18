const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class ImATeapotException extends HttpException {
  constructor(objectOrError, descriptionOrOptions = "I'm a teapot") {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.I_AM_A_TEAPOT
      ),
      HttpStatus.I_AM_A_TEAPOT,
      httpExceptionOptions
    );
  }
};
