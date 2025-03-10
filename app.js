const express = require('express');

const app = express();

app.use();

app.use('/api',(req, res, next) => {
    res.send('<h1>API</h1>');
});

app.use('/',(req, res, next) => {
    res.send('<h1>hello from express</h1>');
});

app.listen(4000);