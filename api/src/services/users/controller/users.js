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
            attributes: ['id', 'email', 'name'],
            where: userDetails
        })
        return userDetail
    } catch (error) {
        console.log("getUserDetails -> error", error)
    }
};

const logoutUser = async () => {
    try {
        models.SessionTokens.destroy({})
            .then()
            .catch()
    } catch (error) {

    }
};

module.exports = {
    createUser, getUserDetails, logoutUser
}