'use strict';
module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        type: {
            type: DataTypes.STRING,
            isIn: [Object.keys(Types).map(key => Types[key])]
        },

    }, {});

    Object.keys(Types).forEach(key => User[key] = Types[key]);

    User.prototype.validPassword = function (password) {
        return (password === this.password);
    };
    return User;
};

const Types = {
    TYPE_ADMIN: 'admin',
    TYPE_SHOP: 'shop',
    TYPE_PARTNER: 'partner',
    TYPE_CLIENT: 'client',
};