'use strict';
module.exports = (sequelize, DataTypes) => {
    const Application = sequelize.define('Application', {
        status: {
            type: DataTypes.STRING,
            isIn: [Object.keys(Statuses).map(key => Statuses[key])]
        },
        identifier: DataTypes.STRING,
        description: DataTypes.STRING,
        amountAmount: DataTypes.DECIMAL,
        amountCurrency: DataTypes.STRING,
    }, {});

    Object.keys(Statuses).forEach(key => Application[key] = Statuses[key]);

    Application.associate = function (models) {
        models.Application.belongsTo(models.Shop, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });

        models.Application.belongsTo(models.Client, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });

        models.Application.belongsTo(models.Partner, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Application;
};

const Statuses = {
    TYPE_DRAFT: 'darft',
    TYPE_REQUEST_SENT: 'request_sent',
    TYPE_TRANSFER_MONEY: 'transfer_money',
    TYPE_Application_ISSUED: 'Application_issued',
    TYPE_CANT_MAKE_OFFER: 'cant_make_offer'
};