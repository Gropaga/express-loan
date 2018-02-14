const express = require('express');
const router = express.Router();
const models = require('models');

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const Users = models.Sequelize.User;
    try {
        users = await Users.findAll();
    } catch(err) {
        next(err)
    }


    res.json(users);
});

/* GET partners listing. */
router.get('/partners', async function (req, res, next) {
    const Partner = models.Sequelize.Partner;
    try {
        partners = await Partner.findAll({ include: [ models.Sequelize.User ] });
    } catch(err) {
        next(err)
    }

    res.json(partners);
});

/* GET shops listing. */
router.get('/shops', async function (req, res, next) {
    const Shop = models.Sequelize.Shop;
    try {
        partners = await Shop.findAll({ include: [ models.Sequelize.User ] });
        res.json(partners);
    } catch(err) {
        next(err);
    }

});

/* GET clients listing. */
router.get('/clients', async function (req, res, next) {
    const Client = models.Sequelize.Client;
    try {
        clients = await Client.findAll({ include: [ models.Sequelize.User ] });
        res.json(clients);
    } catch(err) {
        next(err);
    }

});

/* GET loans listing. */
router.get('/loans', async function (req, res, next) {
    const Loan = models.Sequelize.Loan;
    try {
        loans = await Loan.findAll({ include: [
            {model: models.Sequelize.Client, include: models.Sequelize.User},
            {model: models.Sequelize.Shop, include: models.Sequelize.User},
            {model: models.Sequelize.Partner, include: models.Sequelize.User},
        ] });
        res.json(loans);
    } catch(err) {
        next(err);
    }

});

module.exports = router;
