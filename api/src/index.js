const start = async () => {
    console.info('[APP] - Starting application...');
    const server = require('./server');
    const db = require('./db');

    try {
        await db.connect();
        await server.start();
        console.info('[APP] - Application started. 🚀');
    } catch (err) {
        console.error('[APP] - Failed starting application. Exiting... 👋', err);
        process.exit(1);
    }
};

start();
