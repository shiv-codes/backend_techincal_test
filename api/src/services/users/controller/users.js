const models = require('../models');

const createUser = async (userDetails) => {
    try {
        const createdUser = await models.Users.create(userDetails)
        return createdUser.toJSON()
    } catch (error) {
        return new Error(error.message)
    }
};

const getUserDetails = async (userDetails) => {
    try {
        const userDetail = await models.Users.findOne({
            attributes: ['id', 'email', 'name', 'password'],
            where: userDetails
        })
        const parsedDetails = await userDetail.toJSON()
        return parsedDetails
    } catch (error) {
        return new Error(error.message)
    }
};

const logoutUser = async (condition) => {
    try {
        const sessionToken = await models.SessionTokens.destroy({ where: condition, force: true })
        return sessionToken
    } catch (error) {
        return new Error(error.message)
    }
};

module.exports = {
    createUser, getUserDetails, logoutUser
}