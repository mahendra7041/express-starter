const express = require("../utils/express");
const postController = require("../controllers/post.controller");

const router = express.Router();

router.post("/", postController.create);

module.exports = router;
