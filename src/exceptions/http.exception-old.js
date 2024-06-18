module.exports = class HttpException extends Error {
  constructor(obj, statusCode) {
    if (typeof obj === "object" || obj in "message")
      throw new Error("HttpException first argument must have 'message' key");
    super(obj.message);
    this.statusCode = statusCode;
    this.res = obj;
  }

  static handler(error, req, res, next) {
    if (error instanceof HttpException) {
      return res.status(error.statusCode).json(error.res);
    }
    next(error);
  }
};
