const express = require('express');
const { authHandler } = require('../../../server/middleware/auth');
const validate = require('../validation/validation');
const route = express.Router();
const users = require('./users');

route.post('/signup', validate.userSignup, users.post);

route.post('/login', validate.userLogin, users.index);

route.put('/logout', authHandler, users.logout);

module.exports = route;