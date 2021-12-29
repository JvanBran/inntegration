const {Sequelize,Model,DataTypes} = require('sequelize')
class UserInfo extends Model {
    static init(sequelize){
        return super.init(
            {
                id:{
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                phone:{
                    type: DataTypes.STRING,
                    allowNull: false
                },
                email:{
                    type: DataTypes.STRING,
                    allowNull: false
                }
            },
            { sequelize, modelName: 'UserInfo', comment: "用户详细信息"}
        )
    }
    static associate(models){
        models.UserInfo.belongsTo(models.User)
    }
}
module.exports = UserInfo