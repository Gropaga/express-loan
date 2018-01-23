const HttpError = require('error').HttpError;
const express = require('express');
const router = express.Router();
const models = require('../models/index');
const passport = require('passport');

/* GET users listing. */
router.get('/', function (req, res, next) {
    try {
        res.render('login');
    } catch (err) {
        next(new HttpError(500));
    }
});

router.post('/',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        successFlash: 'Welcome!',
        failureFlash: 'Invalid username or password.',
    })
);

module.exports = router;
