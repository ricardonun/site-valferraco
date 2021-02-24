const { Sequelize , DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

class Users extends Model{
    static init(sequelize){
        super.init({
            login: DataTypes.STRING,
            password: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Users;