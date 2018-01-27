const users = require('./users');
const user = require('./user');
const login = require('./login');
const _ = require('lodash');

module.exports = function(app) {
    app.get('/', function (req, res, next) {



        req.flash('info','flash is back');

        console.log(req.flash.exists('info'));
        console.log(req.flash.exists('warning'));

        res.render('index', {
            title: 'Express'
        });
    });

    app.use('/user', user);
    app.use('/users', users);
    app.use('/login', login)
};