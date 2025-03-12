const express = require('express');
const router = express.Router();

router.get('/questions', (req, res, next) => {
    res.send("<h1>hello from questions</h1>");
});

module.exports = router;