'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.addColumn(
    'products',
    'created_at',
    {
        type: Sequelize.STRING,
        allowNull: false, 
    }
  )},

  down: (queryInterface, Sequelize) => {
    return queryInterface.deleteColumn(
      'products',
      'created_at'
    );
  }
};
