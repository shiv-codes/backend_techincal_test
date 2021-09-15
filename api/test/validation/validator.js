const schema = require('./schema');

const checkNewsResponse = (data) => {
    const { error } = schema.news.validate(data)
    const valid = error == null;
    if (valid) {
        return null
    } else {
        const { details } = error;
        const message = details.map(i => i.message).join(',');
        return message
    }
}

const checkWeatherResponse = (data) => {
    const { error } = schema.weather.validate(data)
    const valid = error == null;
    if (valid) {
        return null
    } else {
        const { details } = error;
        const message = details.map(i => i.message).join(',');
        return message
    }
}

// const checkNewsResponse = (data) => {
//     const { error } = schema.news.validate(data)
//     const valid = error == null;
//     if (valid) {
//         return null
//     } else {
//         return true
//     }
// }

// const checkNewsResponse = (data) => {
//     const { error } = schema.news.validate(data)
//     const valid = error == null;
//     if (valid) {
//         return null
//     } else {
//         return true
//     }
// }

module.exports = {
    checkNewsResponse, checkWeatherResponse
}

