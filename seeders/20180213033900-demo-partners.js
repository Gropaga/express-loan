'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        const now = new Date();
        return queryInterface.bulkInsert('Partners', [{
            name: 'Max Corp',
            bankAccount: '1111111111',
            UserId: 1,
            createdAt: now,
            updatedAt: now
        },{
            name: 'Catz Corp',
            bankAccount: '2222222222',
            UserId: 2,
            createdAt: now,
            updatedAt: now
        },{
            name: 'Dogz Corp',
            bankAccount: '33333333333',
            UserId: 3,
            createdAt: now,
            updatedAt: now
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Partners', null, {});
    }
};
