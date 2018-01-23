const express = require('express');
const router = express.Router();
const models = require('../models/index');

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const Users = models.Sequelize.Users;
    users = await Users.findAll();

    res.json(users);
});

module.exports = router;
