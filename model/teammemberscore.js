const {Sequelize,Model,DataTypes} = require('sequelize')
class TeamMemberScore extends Model {
    static init(sequelize){
        return super.init(
            {
                id:{
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                scoreType:{
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                    comment: '用户类型 1增加 2减少 3管理员赠送 4其他'
                },
                score:{
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                    comment: '积分值'
                }
            },
            { 
                sequelize, 
                freezeTableName: true,
                timestamps: true,
                paranoid: true,
                modelName: 'TeamMemberScore', 
                comment: "团队成员积分记录信息"
            }
        )
    }
    static associate(models){
        models.TeamMemberScore.belongsTo(models.TeamMember)
    }
}

module.exports = TeamMemberScore