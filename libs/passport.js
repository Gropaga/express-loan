const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('../models/index');

passport.use(new LocalStrategy(
    async function(username, password, done) {
        try {
            const Users = models.Sequelize.Users;
            let user = await Users.findOne({ where: {username: username} });

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
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function(user, done) {
    const Users = models.Sequelize.Users;
    let user_ = await Users.findById(user);
    done(null, user_);
});

module.exports = passport;

