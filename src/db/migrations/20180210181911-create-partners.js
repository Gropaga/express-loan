'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return [
            await queryInterface.createTable('Partners', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: {
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
                UserId: {
                    type: Sequelize.BIGINT,
                    references: {
                        model: "Users",
                        key: "id"
                    }
                }
            }),
        ];
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Partners');
    }
};