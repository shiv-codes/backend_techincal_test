const { verifyJWT, generateJWT } = require('../../../utils/jwt')
const models = require('../../services/shared/models')

const authHandler = async (req, res, next) => {
    try {
        const { accesstoken } = req.headers
        verifyJWT(accesstoken).then(async (result) => {
            const tokenDetails = await models.SessionTokens.findOne({})
            if (!tokenDetails) {
                return //send error response
            }
            next(result)
        }).catch((error) => {
            console.log("authHandler -> error", error)
            //send Error response
        })
    } catch (error) {
        //send Error Response
    }
}

module.exports = { authHandler }