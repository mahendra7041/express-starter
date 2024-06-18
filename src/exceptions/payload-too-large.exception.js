const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class PayloadTooLargeException extends HttpException {
  constructor(objectOrError, descriptionOrOptions = "Payload Too Large") {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.PAYLOAD_TOO_LARGE
      ),
      HttpStatus.PAYLOAD_TOO_LARGE,
      httpExceptionOptions
    );
  }
};
