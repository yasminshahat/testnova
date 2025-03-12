const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");

router.get("/login", (req, res, next) => {
  res.send("<h1>hello</h1>");
});

module.exports = router;
