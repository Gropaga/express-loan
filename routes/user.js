const HttpError = require('error').HttpError;
const express = require('express');
const router = express.Router();
const models = require('../models/index');

/* GET users listing. */
router.get('/:id', async function (req, res, next) {
    try {
        const Users = models.Sequelize.Users;
        const id = req.params.id;

        if (!Number.isInteger(id)) {
            return next(new HttpError(404, 'User not found'));
        }

        const user = await Users.findById(id);

        if (!user) {
            next(new HttpError(404, 'User not found'));
        } else {
            res.json(user);
        }
    } catch (err) {
        next(new HttpError(404, 'User not found'));
    }
});

module.exports = router;
