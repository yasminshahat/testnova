const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");

const authController = require('../controllers/auth.Controller');

router.post ('/register', authController.register);

router.post ('login', authController.login);

router.get("/login", (req, res, next) => {
  res.send("<h1>hello</h1>");
});

module.exports = router;
