const users = require('./users');
const user = require('./user');
const login = require('./login');

module.exports = function(app) {
    app.get('/', function (req, res, next) {
        res.render('index', {title: 'Express'});
    });

    app.use('/user', user);
    app.use('/users', users);
    app.use('/login', login)
};