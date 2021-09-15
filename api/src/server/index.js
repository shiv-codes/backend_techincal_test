const app = require('./app');

const start = async () => {
    const port = process.env.PORT || 8000
    console.info('[SERVER] Starting server...');
    return new Promise((resolve, reject) => {
        const server = app
            .listen(port, () => {
                console.info('[SERVER] Server started on port: ', port);
                resolve(server);
            })
            .on('error', err => {
                console.info('[SERVER] Failed starting server:', err.message);
                reject(err);
            });
    });
};

module.exports = { start };