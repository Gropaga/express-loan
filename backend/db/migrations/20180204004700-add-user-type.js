'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return [
            await queryInterface.addColumn(
                'Users',
                'type',
                {
                    type: Sequelize.STRING,
                    allowNull: false,
                    defaultValue: 'admin'
                }
            )
        ];
    },
    down: async (queryInterface, Sequelize) => {
        return [
            await queryInterface.removeColumn('Users', 'type'),
        ];
    }
};