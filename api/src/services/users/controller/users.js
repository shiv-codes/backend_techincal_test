const models = require('../models');

const createUser = async (userDetails) => {
    try {
        return await models.Users.create(userDetails)
    } catch (error) {
        return new Error(error.message)
    }
};

const getUserDetails = async (userDetails) => {
    try {
        return await models.Users.findOne({
            attributes: ['id', 'email', 'name', 'password'],
            where: userDetails
        })
    } catch (error) {
        return new Error(error.message)
    }
};

const logoutUser = async (condition) => {
    try {
        return await models.SessionTokens.destroy({ where: condition, force: true })
    } catch (error) {
        return new Error(error.message)
    }
};

module.exports = {
    createUser, getUserDetails, logoutUser
}