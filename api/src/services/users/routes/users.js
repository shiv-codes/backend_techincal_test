const { createUser, getUserDetails, logoutUser } = require('../controller/users');
const sha256 = require('sha256');

const post = async (req, res) => {
    try {
        let { email, name, password } = req.body
        const user = await createUser({ email, name, password: sha256(password) })
        console.log("post -> user", user)
        //create JWT
        //send response 201
        res.send(user)
    } catch (error) {
        res.status(501).send(error)
    }
}

const index = async ({ body: { email, password } }, res) => {
    try {
        getUserDetails({ email, password })
        //create JWT
        res.send()
    } catch (error) {

    }
}

const logout = async (req, res) => {
    try {
        logoutUser()
        //remove JWT
    } catch (error) {

    }
}

module.exports = {
    post, index, logout
}