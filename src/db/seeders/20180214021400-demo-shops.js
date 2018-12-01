'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        const now = new Date();
        return queryInterface.bulkInsert('Shops', [{
            name: 'Catz Mall',
            bankAccount: 'AD1200012030200359100100',
            UserId: 2,
            createdAt: now,
            updatedAt: now
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Shops', null, {});
    }
};
