const { isObject, isString } = require("../shared");

module.exports = class HttpException extends Error {
  constructor(response, status, options) {
    super();
    this.response = response;
    this.status = status;
    this.options = options;
    this.initMessage();
    this.initName();
    this.initCause();
  }

  cause;

  initCause() {
    if (this.options?.cause) {
      this.cause = this.options.cause;
      return;
    }
  }

  initMessage() {
    if (isString(this.response)) {
      this.message = this.response;
    } else if (isObject(this.response) && isString(this.response.message)) {
      this.message = this.response.message;
    } else if (this.constructor) {
      this.message =
        this.constructor.name.match(/[A-Z][a-z]+|[0-9]+/g)?.join(" ") ??
        "Error";
    }
  }

  initName() {
    this.name = this.constructor.name;
  }

  getResponse() {
    return this.response;
  }

  getStatus() {
    return this.status;
  }

  static createBody(arg0, arg1, statusCode) {
    if (!arg0) {
      return {
        message: arg1,
        statusCode: statusCode,
      };
    }

    if (isString(arg0) || Array.isArray(arg0)) {
      return {
        message: arg0,
        error: arg1,
        statusCode: statusCode,
      };
    }

    return arg0;
  }

  static getDescriptionFrom(descriptionOrOptions) {
    return isString(descriptionOrOptions)
      ? descriptionOrOptions
      : descriptionOrOptions?.description;
  }

  static getHttpExceptionOptionsFrom(descriptionOrOptions) {
    return isString(descriptionOrOptions) ? {} : descriptionOrOptions;
  }

  static extractDescriptionAndOptionsFrom(descriptionOrOptions) {
    const description = isString(descriptionOrOptions)
      ? descriptionOrOptions
      : descriptionOrOptions?.description;

    const httpExceptionOptions = isString(descriptionOrOptions)
      ? {}
      : descriptionOrOptions;

    return {
      description,
      httpExceptionOptions,
    };
  }

  static handler(exception, req, res, next) {
    if (!(exception instanceof HttpException)) {
      return next(exception);
    }

    const response = exception.getResponse();
    const message = isObject(response)
      ? response
      : {
          statusCode: exception.getStatus(),
          message: response,
        };

    // return message;

    return res.status(exception.getStatus()).json(message);
  }
};
