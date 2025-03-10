const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in the middleware');
    next();
});

app.use((req, res, next) => {
    console.log('in another middleware');
});

app.listen(4000);