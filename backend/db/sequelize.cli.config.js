const fs = require('fs');
const sequelizeCliConfig = require('../config');

const config = {
    development: {
        database: sequelizeCliConfig.sequelize.database,
        username: sequelizeCliConfig.sequelize.username,
        password: sequelizeCliConfig.sequelize.password,
        host:     sequelizeCliConfig.sequelize.host,
        dialect: 'postgres'
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'postgres',
        // dialectOptions: {
        //     ssl: {
        //         ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
        //     }
        // }
    },
    // test: {
    //     username: 'database_test',
    //     password: null,
    //     database: 'database_test',
    //     host: '127.0.0.1',
    //     dialect: 'mysql'
    // },
};

module.exports = config;