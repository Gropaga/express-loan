const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BasicStrategy = require('passport-http').BasicStrategy;
const models = require('db/models/index');

passport.AUTH_WWW = 'authWww';
passport.AUTH_SHOP = 'shopAuth';
passport.AUTH_LOAN = 'authLoan';

// www auth
const wwwAuth = new LocalStrategy(
    async function(username, password, done) {
        try {
            const User = models.Sequelize.User;
            let user = await User.findOne(
                {
                    where: {
                        username: username, type: User.TYPE_ADMIN
                    }
                }
            );

            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }

            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }

            return done(null, user);
        } catch (err) {
            done(err);
        }
    }
);
wwwAuth.name = passport.AUTH_WWW;
passport.use(wwwAuth);

// shop auth
const shopAuth = new BasicStrategy(
    async function(username, password, done) {
        try {
            const User = models.Sequelize.User;
            let user = await User.findOne(
                {
                    where: {
                        username: username, type: User.TYPE_SHOP
                    }
                }
            );

            if (!user) {
                return done(null, false);
            }
            if (!user.validPassword(password)) {
                return done(null, false);
            }

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
);
shopAuth.name = passport.AUTH_SHOP;
passport.use(shopAuth);

// loan company auth
const loanAuth = new BasicStrategy(
    async function(username, password, done) {
        try {
            const User = models.Sequelize.User;
            let user = await User.findOne(
                {
                    where: {
                        username: username, type: User.TYPE_LOAN
                    }
                }
            );

            if (!user) {
                return done(null, false);
            }
            if (!user.validPassword(password)) {
                return done(null, false);
            }

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
);
loanAuth.name = passport.AUTH_LOAN;
passport.use(loanAuth);


passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
    const User = models.Sequelize.User;
    try {
        let user = await User.findById(id);
        return done(null, user);
    } catch (err) {
        return done(err);
    }
});

module.exports = passport;

