const { requestNews } = require('../../../../utils/opennews');
const cacheService = require('../../../../utils/cache');

const fetchNews = async (req, res) => {
    try {
        let { search } = req.query
        let cacheKey = `news:${search}`
        let cacheResult = await cacheService.cache.get(cacheKey);
        if (cacheResult) {
            return res.status(200).json(cacheResult)
        }
        const newsData = await requestNews(search)
        cacheService.cache.set(cacheKey, newsData);
        res.status(200).json(newsData)
    } catch (error) {
        res.status(501).send(error.message)
    }
}

module.exports = {
    fetchNews
}