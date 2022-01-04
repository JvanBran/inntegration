const {Sequelize,Model,DataTypes} = require('sequelize')
class User extends Model {
    static init(sequelize){
        return super.init(
            {
                id:{
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                name:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    comment: '用户名'
                },
                password:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    comment: '用户密码'
                },
                userStatus:{
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 1,
                    comment: '账号状态 0禁用 1启用'
                },
                wxOpenId:{
                    type: DataTypes.STRING,
                    allowNull: true,
                    comment: '微信openid'
                },
                wxUnionId:{
                    type: DataTypes.STRING,
                    allowNull: true,
                    comment: '微信unionId'
                }
            },
            { 
                sequelize, 
                freezeTableName: true,
                modelName: 'User', 
                comment: "用户信息"
            }
        )
    }
    static associate(models){
        models.User.hasOne(models.UserInfo)
        models.User.hasMany(models.UserAddr)
        models.User.hasMany(models.TeamAdmin)
    }
}

module.exports = User