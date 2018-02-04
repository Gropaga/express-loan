const v1 = require('./v1');
const passport = require('libs/passport');

module.exports = function (app) {
    app.use(
        '/shop/v1',
        // basic authentication protected routes
        passport.authenticate(
            passport.AUTH_SHOP,
            {
                session: false
            }
        ),
        v1
    );
};