const express = require("express");
const validate = require("./validate");

express.request.validate = validate;

module.exports = express;
