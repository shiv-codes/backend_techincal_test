const { requestNews } = require('../utils/opennews')
const validation = require('./validation/validator');

it('Checking for News Report Response Schema', async () => {
    const news = await requestNews()
    expect(validation.checkNewsResponse(news)).toBeNull();
});
