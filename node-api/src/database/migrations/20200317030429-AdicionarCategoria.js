'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Products',
      'category',
      {
          type: Sequelize.STRING,
          allowNull: false, 
      }
    )
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'Products',
        'category'
      )

  }
};
