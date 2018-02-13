'use strict';
module.exports = (sequelize, DataTypes) => {
    let Users = sequelize.define('Users', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        type: {
            type: DataTypes.STRING,
            isIn: [Object.keys(Types).map(key => Types[key])]
        },

    }, {
        name: {
            singular: "User",
            plural: "Users"
        }
    });

    // User.associate = function(models) {
    //     models.User.hasOne(models.Partner);
    // };

    Object.keys(Types).forEach(key => Users[key] = Types[key]);

    Users.prototype.validPassword = function (password) {
        return (password === this.password);
    };
    return Users;
};

const Types = {
    TYPE_ADMIN: 'admin',
    TYPE_SHOP: 'shop',
    TYPE_PARTNER: 'partner',
    TYPE_CLIENT: 'client',
};