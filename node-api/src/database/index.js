const Sequelize = require('sequelize')
const dbConfig = require('../config/DataBase')

const Products = require('../models/Products')
const Users = require('../models/Users')

const connection = new Sequelize(dbConfig);

Products.init(connection)
Users.init(connection)

module.exports = connection;