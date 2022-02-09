const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('products',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    image:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:Sequelize.DOUBLE,
});

module.exports = Product;