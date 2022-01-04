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
                nickName:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    comment: '用户昵称'
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
                    comment: '第三方标识 0没有'
                }
            },
            { 
                sequelize,
                freezeTableName: true,
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