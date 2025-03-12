const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.post("/create", (req, res, next) => {
  res.send("<h1>hello from exams</h1>");
});

module.exports = router;
