const HttpStatus = require("../http-status");

module.exports = class GlobalException {
  static handler(exception, req, res, next) {
    const response = {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: "Internal server error",
    };

    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(response);
  }
};
