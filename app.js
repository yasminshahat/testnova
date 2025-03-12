const express = require('express');
const path = require('path');


const authRoutes = require("./src/routes/auth.routes");
const questionsRoutes = require("./src/routes/questions.routes");
const examsRoutes = require("./src/routes/exams.routes");
const resultsRoutes = require("./src/routes/results.routes");
const exp = require('constants');

const app = express();

//Serve static files
app.use(express.static(path.join(__dirname, '..public')));

app.use(authRoutes);
app.use(questionsRoutes);
app.use(examsRoutes);
app.use(resultsRoutes);

//404 Page
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../public'))
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

