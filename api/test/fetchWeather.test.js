const { requestWeatherData } = require('../utils/openweather')
const validation = require('./validation/validator');

it('Checking for Weather Report Response Schema', async () => {
    const weather = await requestWeatherData('metric')
    expect(validation.checkWeatherResponse(weather)).toBeNull();
});
