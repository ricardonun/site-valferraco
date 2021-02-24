'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('products', { 
        id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false, 
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        descrition: {
          type: Sequelize.STRING,
        },
        img: {
          type: Sequelize.STRING,
        },        
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('products');
  }
};
