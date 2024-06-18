const express = require("./utils/express");
const cors = require("cors");
const routes = require("./routes");
const logMiddleware = require("./middlewares/log.middleware");
const ValidationException = require("./exceptions/validation.exception");
const HttpException = require("./exceptions/http.exception");
const GlobalException = require("./exceptions/global.exception");
const app = express();

const port = env("PORT", 5001);
const hostname = env("HOSTNAME", "http://localhost");

app.use(logMiddleware);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(ValidationException.handler);
app.use(HttpException.handler);
app.use(GlobalException.handler);

app.listen(port, () => {
  console.log(`Your server is listening on ${hostname}:${port}`);
});
