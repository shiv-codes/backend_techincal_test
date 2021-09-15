const start = async () => {
    console.info('[APP] - Starting application...');
    const server = require('./server');
    const db = require('./db');
    const config = require('../src/config/env-config')

    try {
        config.configureENV();
        await db.connect();
        await server.start();
        console.info('[APP] - Application started. 🚀');
    } catch (err) {
        console.error('[APP] - Failed starting application. Exiting... 👋', err);
        process.exit(1);
    }
};

start();
