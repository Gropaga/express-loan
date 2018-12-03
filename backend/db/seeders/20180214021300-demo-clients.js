'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        const now = new Date();
        return queryInterface.bulkInsert('Clients', [{
            name: "Maksims",
            surname: "Vorobjovs",
            identityNumber: "071188-11650",
            email: "rtfm@inbox.lv",
            dob: new Date('1988-11-07'),
            tel: "+37125998732",
            UserId: 4,
            createdAt: now,
            updatedAt: now
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Clients', null, {});
    }
};
