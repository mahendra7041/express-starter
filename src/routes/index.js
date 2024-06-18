const express = require("../utils/express");
const postRoutes = require("./post.router");

const router = express.Router();

router.use("/posts", postRoutes);

module.exports = router;
