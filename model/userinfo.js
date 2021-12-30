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
                    allowNull: false,
                    comment: '用户手机号码'
                },
                email:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    comment: '用户邮箱'
                },
                userFrom:{
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                    comment: '第三方标识'
                },
                userStatus:{
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                    comment: '账号状态'
                },
                wxOpenId:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    defaultValue: 0,
                    comment: '微信openid'
                },
                wxUnionId:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    defaultValue: 0,
                    comment: '微信unionId'
                }
            },
            { 
                sequelize,
                freezeTableName: true,
                timestamps: true,
                paranoid: true,
                modelName: 'UserInfo', 
                comment: "用户详细信息"
            }
        )
    }
    static associate(models){
        models.UserInfo.belongsTo(models.User)
    }
}
module.exports = UserInfo