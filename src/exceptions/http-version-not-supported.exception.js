const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class HTTPVersionNotSupportedException extends HttpException {
  constructor(
    objectOrError,
    descriptionOrOptions = "HTTP Version Not Supported"
  ) {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.HTTP_VERSION_NOT_SUPPORTED
      ),
      HttpStatus.HTTP_VERSION_NOT_SUPPORTED,
      httpExceptionOptions
    );
  }
};
