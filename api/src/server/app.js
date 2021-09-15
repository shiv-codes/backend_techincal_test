const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const newsRoutes = require('../services/news/routes');
const weatherRoutes = require('../services/weather/routes');
const userRoutes = require('../services/users/routes');

const app = express();

app.get('/health', (req, res) => res.sendStatus(200));

app.use(cors());

app.use(helmet());
app.use(bodyParser.json());

app.use(weatherRoutes);
app.use(newsRoutes);
app.use(userRoutes);

app.get('*', (req, res, next) => {
    res.send('Not Found Error')
});

module.exports = app;