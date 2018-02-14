'use strict';
module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        identityNumber: DataTypes.STRING,
        email: DataTypes.STRING,
        dob: DataTypes.DATEONLY,
        tel: DataTypes.STRING,
    }, {});

    Client.associate = function (models) {
        models.Client.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Client;
};