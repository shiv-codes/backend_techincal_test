const { verifyJWT, generateJWT } = require('../../../utils/jwt')
const models = require('../../services/shared/models')

const authHandler = async (req, res, next) => {
    try {
        const accessToken = req.headers.authorization ? req.headers.authorization.split(" ")[1] : null
        if (!accessToken)
            return res.status(401).send('Unauthorized access')
        await verifyJWT(accessToken)
        const tokenDetails = await models.SessionTokens.findOne({ where: { accessToken } })
        if (!tokenDetails) {
            return res.status(401).send('Unauthorized access')//send error response
        }
        const parsedToken = tokenDetails.toJSON();
        req.data = {
            userId: parsedToken.userId,
            accessToken: parsedToken.accessToken
        }
        next()
    } catch (error) {
        return res.status(401).send(error.message)
    }
}

const authSetup = async (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const generatedToken = await generateJWT(payload)
            const tokenDetails = await models.SessionTokens.create({ userId: payload.userId, accessToken: generatedToken })
            const parsedToken = tokenDetails.toJSON()
            resolve(parsedToken)
        } catch (error) {
            reject(error)
        }
    })
}

const adminAuthHandler = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const payload = { userId: 0 }
            const generatedToken = await generateJWT(payload)
            const tokenDetails = await models.SessionTokens.create({ userId: payload.userId, accessToken: generatedToken })
            const parsedToken = tokenDetails.toJSON()
            resolve(parsedToken)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = { authHandler, authSetup, adminAuthHandler }