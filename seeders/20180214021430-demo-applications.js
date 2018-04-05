'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        const now = new Date();
        return queryInterface.bulkInsert('Applications', [{
            status: 'draft',
            identifier: '000001',
            description: 'MacBook Pro 15',
            amountAmount: 3198.55,
            amountCurrency: 'EUR',
            createdAt: now,
            updatedAt: now,
            ClientId: 1,
            ShopId: 1,
            PartnerId: 1,
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Applications', null, {});
    }
};
