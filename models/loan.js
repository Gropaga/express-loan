'use strict';
module.exports = (sequelize, DataTypes) => {
    const Loan = sequelize.define('Loan', {
        status: {
            type: DataTypes.STRING,
            isIn: [Object.keys(Statuses).map(key => Statuses[key])]
        },
        identifier: DataTypes.STRING,
        description: DataTypes.STRING,
        amountAmount: DataTypes.DECIMAL,
        amountCurrency: DataTypes.STRING,
    }, {});

    Object.keys(Statuses).forEach(key => Loan[key] = Statuses[key]);

    Loan.associate = function (models) {
        models.Loan.belongsTo(models.Shop, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });

        models.Loan.belongsTo(models.Client, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });

        models.Loan.belongsTo(models.Partner, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Loan;
};

const Statuses = {
    TYPE_DRAFT: 'darft',
    TYPE_REQUEST_SENT: 'request_sent',
    TYPE_TRANSFER_MONEY: 'transfer_money',
    TYPE_LOAN_ISSUED: 'loan_issued',
    TYPE_CANT_MAKE_OFFER: 'cant_make_offer'
};