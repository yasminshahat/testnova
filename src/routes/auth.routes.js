const router = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware');

// Auth routes
router.post('/login', (req, res) => {
  // TODO: Implement login logic
});

router.post('/register', (req, res) => {
  // TODO: Implement registration logic
});

router.post('/logout', authMiddleware, (req, res) => {
  // TODO: Implement logout logic
});

module.exports = router;
