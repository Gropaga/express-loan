'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        const now = new Date();
        return queryInterface.bulkInsert('Users', [{
            username: 'test',
            password: 'Test1234',
            type: 'admin',
            createdAt: now,
            updatedAt: now
        },{
            username: 'test-shop',
            password: 'Test1234',
            type: 'shop',
            createdAt: now,
            updatedAt: now
        },{
            username: 'test-partner',
            password: 'Test1234',
            type: 'partner',
            createdAt: now,
            updatedAt: now
        },{
            username: 'test-client',
            password: 'Test1234',
            type: 'client',
            createdAt: now,
            updatedAt: now
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
