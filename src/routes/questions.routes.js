const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

const questions = [];

router.get("/questions", (req, res, next) => {
  res.sendFile(path.join(rootDir, "..public"));
});

router.post("/questions", (req, res, next) => {
  questions.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.questions = questions;
