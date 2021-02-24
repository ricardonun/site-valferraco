const { Sequelize , DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

class Products extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            descrition: DataTypes.STRING,
            img: DataTypes.STRING, 
            category: DataTypes.STRING        
        },{
            sequelize
        })
    }
}

module.exports = Products;