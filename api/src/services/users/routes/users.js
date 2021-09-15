const { createUser, getUserDetails, logoutUser } = require('../controller/users');
const sha256 = require('sha256');
const { authSetup } = require('../../../server/middleware/auth');

const post = async (req, res) => {
    try {
        let { email, name, password } = req.body
        const user = await createUser({ email, name, password: sha256(password) })
        //create JWT
        const accessToken = await authSetup({ userId: user.id })
        //generate response
        const response = { name: user.name, email: user.email, token: accessToken.accessToken }
        return res.status(201).json(response)
    } catch (error) {
        res.status(501).send(error.message)
    }
}

const index = async ({ body: { email, password } }, res) => {
    try {
        const userDetails = await getUserDetails({ email })
        if (!userDetails) { //account not found
            return res.send('Account not found')
        }
        if (userDetails.password !== sha256(password)) {//invalid password
            return res.send('Incorrect Password')
        }
        //create JWT
        const accessToken = await authSetup({ userId: userDetails.id })
        //generate response
        const response = { name: userDetails.name, email: userDetails.email, token: accessToken.accessToken }
        return res.status(201).json(response)
    } catch (error) {
        res.status(501).send(error.message)
    }
}

const logout = async (req, res) => {
    try {
        const accessToken = req.data.accessToken;
        const logout = await logoutUser({ accessToken })
        if (logout != 1) {
            return res.status(501).send('Error in logout')
        }
        return res.status(200).send('Logout Successfull')
    } catch (error) {
        res.status(501).send(error.message)
    }
}

module.exports = {
    post, index, logout
}