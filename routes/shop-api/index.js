const v1 = require('./v1');
const passport = require('libs/passport');

module.exports = function (app) {
    app.use(
        '/shop-api/v1',
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