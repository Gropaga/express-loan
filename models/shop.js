'use strict';
module.exports = (sequelize, DataTypes) => {
  var Shops = sequelize.define('shops', {
    name: DataTypes.STRING,
    bank_account: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Shops;
};