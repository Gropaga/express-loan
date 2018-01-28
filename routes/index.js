const users = require('./users');
const user = require('./user');
const auth = require('./auth');
const authMi = require('../middleware/auth');

module.exports = function(app) {
    app.get('/', function (req, res, next) {
        res.render('index', {
            title: 'Express'
        });
    });

    app.use('/user', authMi, user);
    app.use('/users', authMi, users);
    app.use('/', auth);
};