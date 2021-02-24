'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Users', {
         id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false, 
         } ,
         login:{
          type: Sequelize.STRING,
          allowNull: false
         } ,
         password:{
           type: Sequelize.STRING,
           allowNull: false
         },
         createdAt:{
           type: Sequelize.DATE,
           allowNull: false
         },
         UpdatedAt:{
           type: Sequelize.DATE,
           allowNull: false
         }
         });
    
  },

  down: (queryInterface, Sequelize) => {

     return queryInterface.dropTable('Users');
  }
};
