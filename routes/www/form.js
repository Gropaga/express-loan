const HttpError = require('error').HttpError;
const express = require('express');
const router = express.Router();

router.get('/form', function (req, res, next) {
    try {
        res.render('form');
    } catch (err) {
        next(new HttpError(500));
    }
});

module.exports = router;
