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
    }
    static associate(models){
        models.User.hasOne(models.UserInfo)
    }
}

module.exports = User