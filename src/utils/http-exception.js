import { isObject, isString } from "./shared";

export class HttpException extends Error {
  constructor(response, status, options) {
    super();
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
}
