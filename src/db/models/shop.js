'use strict';
module.exports = (sequelize, DataTypes) => {
    const Shop = sequelize.define('Shop', {
        name: DataTypes.STRING,
        bankAccount: DataTypes.STRING
    }, {});

    Shop.associate = function (models) {
        models.Shop.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Shop;
};