const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class BadGatewayException extends HttpException {
  constructor(objectOrError, descriptionOrOptions = "Bad Gateway") {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.BAD_GATEWAY
      ),
      HttpStatus.BAD_GATEWAY,
      httpExceptionOptions
    );
  }
};
