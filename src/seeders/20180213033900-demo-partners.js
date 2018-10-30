'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        const now = new Date();
        return queryInterface.bulkInsert('Partners', [{
            name: 'Max Partnership Inc',
            bankAccount: 'BE68539007547034',
            UserId: 3,
            createdAt: now,
            updatedAt: now
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Partners', null, {});
    }
};
