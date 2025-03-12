const express = require("express");
const path = require("path");

const authRoutes = require("./src/routes/auth.routes");
const questionsRoutes = require("./src/routes/questions.routes");
const examsRoutes = require("./src/routes/exams.routes");
const resultsRoutes = require("./src/routes/results.routes");
const exp = require("constants");

const errorController = require('./src/controllers/error.Controller');

const app = express();

//Serve static files
app.use(express.static(path.join(__dirname, "..public")));

app.use(authRoutes);
app.use(questionsRoutes);
app.use(examsRoutes);
app.use(resultsRoutes);

app.use((req, res, next) => {
  res.send("<h1>hellooo</h1>");
});

//404 Page
app.use(errorController.get404);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
