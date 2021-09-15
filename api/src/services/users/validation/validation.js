const schema = require('./schema');

const userLogin = (req, res, next) => {
    const { error } = schema.userLogin.validate(req.body)
    const valid = error == null;
    if (valid) {
        next();
    } else {
        const { details } = error;
        const message = details.map(i => i.message).join(',');
        res.send(message)
    }
}

const userSignup = (req, res, next) => {
    const { error } = schema.userSignup.validate(req.body)
    const valid = error == null;
    if (valid) {
        next();
    } else {
        const { details } = error;
        const message = details.map(i => i.message).join(',');
        //send response 501
        res.send(message)
    }
}

module.exports = {
    userLogin,
    userSignup
}

