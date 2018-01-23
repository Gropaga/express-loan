const config = require('config');
const Sequelize = require('sequelize');
/**
 *
 * @type {Sequelize}
 */
module.exports = new Sequelize(
    config.sequelize.uri,
    { operatorsAliases: false }
);