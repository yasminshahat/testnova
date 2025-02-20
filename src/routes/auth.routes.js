const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Auth routes
router.post('/login', authController.login);

router.post('/register', authController.register);

router.post('/logout', authMiddleware, (req, res) => {
  res.json(successResponse(null, 'Logout successful'));
});

module.exports = router;
