const v1 = require('./v1');
const passport = require('libs/passport');

module.exports = function(app) {
    app.use(
        '/partner-api/v1',
        // basic authentication protected routes
        passport.authenticate(
            passport.AUTH_LOAN,
            {
                session: false
            }
        ),
        v1
    );
};