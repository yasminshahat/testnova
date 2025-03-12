const express = require('express');
const router = express.Router();

router.get("/results", (req, res, next) => {
    res.send("<h1>hello from results</h1>")
});

module.exports = router;