const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/api',(req, res, next) => {
    res.send('<<h1>API</h1>>');
});

app.use('/',(req, res, next) => {
    console.log(req.body);
    res.send('<h1>hello from express</h1>');
});

app.listen(4000);