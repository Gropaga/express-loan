const express = require('express');
const router = express.Router();
const models = require('models');

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const Users = models.Sequelize.User;
    users = await Users.findAll();

    res.json(users);
});

/* GET users listing. */
router.get('/partners', async function (req, res, next) {
    const Partners = models.Sequelize.Partners;
    partners = await Partners.findAll({ include: [ models.Sequelize.Users ] });

    res.json(partners);
});

module.exports = router;
