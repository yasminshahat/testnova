const express = require('express');

const authRoutes = require("./routes/auth");
const questionsRoutes = require("./routes/questions");
const app = express();

app.use(authRoutes);
app.use(questionsRoutes);

app.get("/", (req, res) => res.send("Hello, world!"));


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

