const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const config = require('config');
config.session.store = new RedisStore(config.redis);
module.exports = session(config.session);