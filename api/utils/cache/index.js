const NodeCache = require("node-cache");

class Cache {

    constructor(ttlSeconds) {
        this.cache = new NodeCache({ stdTTL: ttlSeconds, checkperiod: ttlSeconds * 0.2, useClones: false });
    }

    get(key, storeFunction) {
        const value = this.cache.get(key);
        if (value) {
            return Promise.resolve(value);
        }

        return storeFunction().then((result) => {
            this.cache.set(key, result);
            return result;
        });
    }

    del(keys) {
        this.cache.del(keys);
    }

    flush() {
        this.cache.flushAll();
    }
}

module.exports = new Cache(10800) // Cached for 3 hours i.e 10800 seconds
