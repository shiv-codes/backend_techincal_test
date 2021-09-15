const Joi = require('joi');

const news = Joi.object({
    count: Joi.number().required(),
    data: Joi.array().required()
})

const weather = Joi.object({
    count: Joi.number().required(),
    unit: Joi.string().required(),
    location: Joi.string().required(),
    data: Joi.array().required(),
})

module.exports = {
    news, weather
}