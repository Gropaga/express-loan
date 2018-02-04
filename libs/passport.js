const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BasicStrategy = require('passport-http').BasicStrategy;
const models = require('../models/index');

passport.AUTH_WWW = 'authWww';
passport.AUTH_SHOP = 'shopAuth';
passport.AUTH_LOAN = 'authLoan';

// www auth
const wwwAuth = new LocalStrategy(
    async function(username, password, done) {
        try {
            const Users = models.Sequelize.Users;
            let user = await Users.findOne(
                {
                    where: {
                        username: username, type: Users.TYPE_ADMIN
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
            const Users = models.Sequelize.Users;
            let user = await Users.findOne(
                {
                    where: {
                        username: username, type: Users.TYPE_SHOP
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
            const Users = models.Sequelize.Users;
            let user = await Users.findOne(
                {
                    where: {
                        username: username, type: Users.TYPE_LOAN
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

passport.deserializeUser(async function(user, done) {
    const Users = models.Sequelize.Users;
    let user_ = await Users.findById(user);
    done(null, user_);
});

module.exports = passport;

