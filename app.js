const express = require('express');

const authRoutes = require("./routes/auth");

const app = express();

app.use(authRoutes);

app.get("/", (req, res) => res.send("Hello, world!"));


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

