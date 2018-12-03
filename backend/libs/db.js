const config = require('config');
const Sequelize = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

module.exports = new Sequelize(
    config.sequelize.database,
    config.sequelize.username,
    config.sequelize.password,
    {
        host: config.sequelize.host,
        dialect: 'postgres',
        // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
        operatorsAliases: false,
    }
);