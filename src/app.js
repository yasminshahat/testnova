const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(
  cors({
    origin: 'http://localhost:3000', // Your Vite frontend URL
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use('/api', require('./routes'));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Catch-all route for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = app;
