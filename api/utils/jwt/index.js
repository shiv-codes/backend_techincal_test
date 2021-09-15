const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET

const generateJWT = (payLoad) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payLoad, secretKey, { expiresIn: payLoad.expiresIn ? payLoad.expiresIn : '8h' }, (error, token) => {
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
        jwt.verify(token, secretKey, function (error, decoded) {
            if (error) {
                console.log("verifyJWT -> error", error)
                reject(error)
            }
            else {
                resolve()
            }
        })
    })
}

module.exports = {
    generateJWT, verifyJWT
}