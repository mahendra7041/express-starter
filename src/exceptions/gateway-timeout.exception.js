const HttpException = require("./http.exception");
const HttpStatus = require("../http-status");

module.exports = class GatewayTimeoutException extends HttpException {
  constructor(objectOrError, descriptionOrOptions = "Gateway Timeout") {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.GATEWAY_TIMEOUT
      ),
      HttpStatus.GATEWAY_TIMEOUT,
      httpExceptionOptions
    );
  }
};
