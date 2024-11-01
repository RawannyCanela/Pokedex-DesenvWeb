const { Sequelize, DataTypes } = require('sequelize');
const sequelize =  new Sequelize('sqlite::memory');

const User = sequelize.define(
'User',
{
    nomePessoa: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nomeEquipe: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{

}
);