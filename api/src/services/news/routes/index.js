const express = require('express');
const router = express.Router();

const { authHandler } = require('../../../server/middleware/auth');
const { fetchNews } = require('./newsReport');

router.get('/news', authHandler, fetchNews);

module.exports = router