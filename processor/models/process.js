'use strict';
module.exports = (sequelize, DataTypes) => {
    const Process = sequelize.define('Process', {
        key: DataTypes.STRING,
        state: DataTypes.JSON
    }, {});
    Process.associate = function (models) {
        // associations can be defined here
    };
    return Process;
};