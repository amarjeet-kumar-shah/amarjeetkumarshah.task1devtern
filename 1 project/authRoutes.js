const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

// @route    POST api/register
// @desc     Register user
router.post('/register', register);

// @route    POST api/login
// @desc     Login user
router.post('/login', login);

module.exports = router;

