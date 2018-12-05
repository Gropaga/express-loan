const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const config = require('config');
config.session.store = new RedisStore({
    // REDIS_URL set via docker-compose.yml
    // config.redis is set at config/development/redis.json
    "url": "redis://" + config.redis.host
});
module.exports = session(config.session);