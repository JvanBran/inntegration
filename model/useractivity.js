const {Sequelize,Model,DataTypes} = require('sequelize')
class UserActivity extends Model {
    static init(sequelize){
        return super.init(
            {
                id:{
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                }
            },
            { 
                sequelize, 
                freezeTableName: true,
                timestamps: true,
                paranoid: true,
                modelName: 'UserActivity', 
                comment: "团队活动"
            }
        )
    }
    static associate(models){
        models.UserActivity.belongsTo(models.TeamActivity)
        models.UserActivity.belongsTo(models.User)
    }
}

module.exports = UserActivity