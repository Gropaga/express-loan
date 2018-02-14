'use strict';

module.exports = (sequelize, DataTypes) => {
    const Partner = sequelize.define('Partner', {
        name: DataTypes.STRING,
        bankAccount: DataTypes.STRING,
    }, {});

    Partner.associate = function(models) {
        models.Partner.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Partner;
};