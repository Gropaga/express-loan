'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return [
            await queryInterface.createTable('Loans', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                status: {
                    type: Sequelize.STRING
                },
                identifier: {
                    type: Sequelize.STRING
                },
                description: {
                    type: Sequelize.STRING
                },
                amountAmount: {
                    type: Sequelize.DECIMAL
                },
                amountCurrency: {
                    type: Sequelize.STRING
                },
                bankAccount: {
                    type: Sequelize.STRING
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                ClientId: {
                    type: Sequelize.BIGINT,
                    references: {
                        model: "Clients",
                        key: "id"
                    }
                },
                ShopId: {
                    type: Sequelize.BIGINT,
                    references: {
                        model: "Shops",
                        key: "id"
                    }
                },
                PartnerId: {
                    type: Sequelize.BIGINT,
                    references: {
                        model: "Partners",
                        key: "id"
                    }
                },
            }),
        ];
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Loans');
    }
};