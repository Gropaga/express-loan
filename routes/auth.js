const HttpError = require('error').HttpError;
const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', function (req, res, next) {
    try {
        res.render('login');
    } catch (err) {
        next(new HttpError(500));
    }
});

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        successFlash: 'Welcome!',
        failureFlash: 'Invalid username or password.',
    })
);

module.exports = router;
