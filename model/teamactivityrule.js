const {Sequelize,Model,DataTypes} = require('sequelize')
class TeamActivityRule extends Model {
    static init(sequelize){
        return super.init(
            {
                id:{
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                activityfrequency:{
                    type: DataTypes.INTEGER,
                    comment: "团队活动打卡次数"
                },
                activityrule:{
                    type: DataTypes.STRING,
                    comment: "团队活动规则描述"
                },
            },
            { 
                sequelize, 
                freezeTableName: true,
                timestamps: true,
                paranoid: true,
                modelName: 'TeamActivityRule', 
                comment: "团队活动"
            }
        )
    }
    static associate(models){
        models.TeamActivityRule.belongsTo(models.TeamActivity)
    }
}

module.exports = TeamActivityRule