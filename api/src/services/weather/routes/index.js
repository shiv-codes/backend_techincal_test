const express = require('express');
const route = express.Router();

const { fetchWeather } = require('./weather');

route.get('/weather', fetchWeather)

module.exports = route;