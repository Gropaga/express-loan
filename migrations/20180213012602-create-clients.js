'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return [
            await queryInterface.createTable('Clients', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: {
                    type: Sequelize.STRING
                },
                surname: {
                    type: Sequelize.STRING
                },
                identityNumber: {
                    type: Sequelize.STRING
                },
                email: {
                    type: Sequelize.STRING
                },
                dob: {
                    type: Sequelize.STRING
                },
                tel: {
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
                serId: {
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
        return queryInterface.dropTable('Clients');
    }
};