'use strict';

const fs = require('fs');
const path = require('path');
const sequelize = require('sequelize');
const basename = path.basename(__filename);
const dbExport = {};
const Sequelize = require('libs/db');

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename)
            && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = Sequelize['import'](path.join(__dirname, file));
        Sequelize[model.name] = model;
    });

Object.keys(Sequelize).forEach(modelName => {
    if (Sequelize[modelName].associate) {
        Sequelize[modelName].associate(Sequelize);
    }
});

dbExport.sequelize = sequelize;
dbExport.Sequelize = Sequelize;

module.exports = dbExport;
