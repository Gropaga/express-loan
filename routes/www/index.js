const users = require('./users');
const auth = require('./auth');
const root = require('./root');
const authMid = require('middleware/auth-redirect');

module.exports = function(app) {
    app.get('/', root);

    app.use('/users', authMid, users);
    app.use('/', auth);
};