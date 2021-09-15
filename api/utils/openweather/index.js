const fetch = require('axios')
require('dotenv').config();
const API_KEY = process.env.OPEN_WEATHER_API_KEY

const requestWeatherData = async (unit) => {
    return new Promise(async (resolve, reject) => {
        try {
            const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=12.9538477&lon=77.3507442&exclude=current,minutely,hourly,alerts&units=${unit}&appid=${API_KEY}`)
            const parsedData = weatherData.data.daily.map((item) => {
                return {
                    "date": new Date(item.dt * 1000).toDateString(),
                    "main": item.weather[0].description,
                    "temp": item.temp.day,
                }
            })

            const response = {
                count: parsedData.length,
                unit: unit,
                location: "Banglore",
                data: parsedData
            }
            resolve(response)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    requestWeatherData
}