const express = require("express");
const router = express.Router();
const rootDir = require('../util/path');

router.get("/create", (req, res, next) => {
  res.send("<h1>hello from exams</h1>");
});

module.exports = router;
