const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');

router.get('/questions', (req, res, next) => {
    res.send("<h1>hello from questions</h1>");
});

module.exports = router;