const {Sequelize,Model,DataTypes} = require('sequelize')
class UserAddr extends Model {
    static init(sequelize){
        return super.init(
            {
                addressId:{
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                dataFlag:{
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    comment: '有效状态 1：有效 -1：无效'
                },
                isDefault:{
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    comment: '是否默认地址	0：否 1：是'
                },
                userAddress:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    comment: '详细地址'
                },
                userName:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    comment: '收货人名称'
                },
                userPhone:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    comment: '收货人手机号码'
                },
                areaIdPath:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    comment: '区域ID路径'
                }
            },
            { 
                sequelize, 
                freezeTableName: true,
                timestamps: true,
                paranoid: true,
                modelName: 'UserAddr', 
                comment: "用户地址信息"
            }
        )
    }
    static associate(models){
        models.UserAddr.belongsTo(models.User)
    }
}
module.exports = UserAddr