const {Sequelize,Model,DataTypes} = require('sequelize')
const sequelize = require('./sequelize.js')
class User extends Model {}
User.init(
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        nickname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { sequelize, modelName: 'User', comment: "用户信息",}
)