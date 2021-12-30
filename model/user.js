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
                nickname:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    comment: '用户昵称'
                },
                password:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    comment: '用户密码'
                }
            },
            { 
                sequelize, 
                freezeTableName: true,
                timestamps: true,
                paranoid: true,
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