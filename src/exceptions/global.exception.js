const HttpStatus = require("../constants/http-status");

module.exports = class GlobalException {
  static handler(error, req, res, next) {
    if (env.DEBUG) console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "Internal server error",
    });
  }
};
