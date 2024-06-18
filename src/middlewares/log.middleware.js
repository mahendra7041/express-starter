const fs = require("fs");
const morgan = require("morgan");
const path = require("path");

const logStream = fs.createWriteStream(
  path.join(__dirname, "../../storage/logs/express.log"),
  {
    flags: "a",
  }
);

module.exports = morgan("combined", { stream: logStream });
