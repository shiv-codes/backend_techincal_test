const NewsAPI = require('newsapi');
require('dotenv').config();
const newsapi = new NewsAPI(process.env.OPEN_NEWS_API_KEY);

const requestNews = async (searchString) => {
    return new Promise((resolve, reject) => {
        try {
            const newMeta = {
                q: searchString ? searchString : '',
                language: 'en',
                country: 'us'
            }

            newsapi.v2.topHeadlines(newMeta).then(response => {
                const result = {
                    count: response.totalResults,
                    data: response.articles.map((item, index) => {
                        return {
                            headline: item.title,
                            link: item.url
                        }
                    })
                }
                resolve(result);
            });
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    requestNews
}
