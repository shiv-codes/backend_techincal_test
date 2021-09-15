const Joi = require('joi');

const userLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().max(12).min(5).required()
})

const userSignup = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().max(12).min(5).required(),
    name: Joi.string().max(32).required()
})

module.exports = {
    userLogin, userSignup
}
