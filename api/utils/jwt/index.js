const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET

const generateJWT = (payLoad) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payLoad, secretKey, { expiresIn: payLoad.expiresIn }, (error, token) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(token)
            }
        })
    })
}

const verifyJWT = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretkey, function (error, decoded) {
            if (error) {
                reject(error)
            }
            else {
                const data = {
                    profileId: decoded.profileId,
                    accessToken: token,
                    profileType: decoded.profileType
                }
                resolve(data)
            }
        })
    })
}

module.exports = {
    generateJWT, verifyJWT
}