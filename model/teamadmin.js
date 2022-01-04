const {Sequelize,Model,DataTypes} = require('sequelize')
class TeamAdmin extends Model {
    static init(sequelize){
        return super.init(
            {
                id:{
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                userType:{
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    comment: '管理员类型 1 普通用户 0 超级管理员'
                }
            },
            { 
                sequelize, 
                freezeTableName: true,
                modelName: 'TeamAdmin', 
                comment: "团队管理员信息"
            }
        )
    }
    static associate(models){
        models.TeamAdmin.belongsTo(models.Team)
        models.TeamAdmin.belongsTo(models.User)
    }
}

module.exports = TeamAdmin