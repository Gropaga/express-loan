'use strict';

module.exports = (sequelize, DataTypes) => {
    const Partners = sequelize.define('Partners', {
        name: DataTypes.STRING,
        bankAccount: DataTypes.STRING,
    }, {
        name: {
            singular: "partner",
            plural: "partners"
        }
    });

    Partners.associate = function(models) {
        models.Partners.belongsTo(models.Users, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Partners;
};