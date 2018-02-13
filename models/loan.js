'use strict';
module.exports = (sequelize, DataTypes) => {
  const Loans = sequelize.define('loans', {
    name: DataTypes.STRING,
    bank_account: DataTypes.STRING,
    status: DataTypes.STRING,
    request_number: DataTypes.STRING,
    amount_amount: DataTypes.DECIMAL,
    amount_currency: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Loans;
};