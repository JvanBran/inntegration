const {Sequelize,Model,DataTypes} = require('sequelize')
class TeamActivity extends Model {
    static init(sequelize){
        return super.init(
            {
                id:{
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                activityDetail:{
                    type: DataTypes.STRING,
                    comment: "团队活动详情"
                },
                activityOpenTime:{
                    type: DataTypes.DATE,
                    comment: "团队活动开始时间"
                },
                activityEndTime:{
                    type: DataTypes.STRING,
                    comment: "团队活动结束时间"
                },
                activityScore:{
                    type: DataTypes.INTEGER,
                    comment: "团队活动积分值"
                },

            },
            { 
                sequelize, 
                freezeTableName: true,
                timestamps: true,
                paranoid: true,
                modelName: 'TeamActivity', 
                comment: "团队活动"
            }
        )
    }
    static associate(models){
        models.TeamActivity.belongsTo(models.Team)
    }
}

module.exports = TeamActivity