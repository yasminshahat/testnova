const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');

router.get("/results", (req, res, next) => {
    res.send("<h1>hello from results</h1>")
});

module.exports = router;