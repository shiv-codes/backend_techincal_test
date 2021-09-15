const schema = require('./schema');

const checkNewsResponse = (data) => {
    const { error } = schema.news.validate(data)
    const valid = error == null;
    if (valid) {
        return null
    } else {
        const { details } = error;
        return details.map(i => i.message).join(',');

    }
}

const checkWeatherResponse = (data) => {
    const { error } = schema.weather.validate(data)
    const valid = error == null;
    if (valid) {
        return null
    } else {
        const { details } = error;
        return details.map(i => i.message).join(',');
    }
}

module.exports = {
    checkNewsResponse, checkWeatherResponse
}

