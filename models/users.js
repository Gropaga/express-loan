'use strict';
module.exports = (sequelize, DataTypes) => {
    let Users = sequelize.define('Users', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        type: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });

    Users.TYPE_ADMIN = 'admin';
    Users.TYPE_SHOP = 'shop';
    Users.TYPE_LOAN = 'loan';

    Users.prototype.validPassword = function (password) {
        return (password === this.password);
    };
    return Users;
};