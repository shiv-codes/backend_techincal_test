const { requestWeatherData } = require('../../../../utils/openweather');
const cacheService = require('../../../../utils/cache');

const fetchWeather = async (req, res) => {
    try {
        const cacheKey = `weather:Banglore`
        const units = 'metric'
        let cacheResult = await cacheService.cache.get(cacheKey);
        if (cacheResult) {
            return res.status(200).json(cacheResult)
        }
        const weatherData = await requestWeatherData(units)
        cacheService.cache.set(cacheKey, weatherData);
        return res.status(200).json(weatherData)
    } catch (error) {
        return res.status(501).send(error.message)
    }
}

module.exports = { fetchWeather }


