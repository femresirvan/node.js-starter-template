const express = require('express');
const passport = require('passport');
const { login, register, getUser, updateProfile, resetPassword } = require('../controllers/auth');

const router = express.Router();

// User authentication
router.post('/api/users/login', login);
router.post('/api/users/register', register);
// User operations
router.put('/api/users/profile', updateProfile);
router.put('/api/users/password', resetPassword);
router.get('/api/users/me', passport.authenticate('jwt', { session: false }), getUser);

module.exports = router;
