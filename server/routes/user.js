const express = require('express');
const { register, login } = require('../controllers/user');
const checkRouteBody = require('../middleware/checkRouteBody');
const router = express.Router();

const registerBody = ['email','name','password'];
const loginBody = ['email','password'];

// routes
router.post('/register', checkRouteBody(registerBody) ,register);
router.post('/login',checkRouteBody(loginBody) ,login);

module.exports = router;