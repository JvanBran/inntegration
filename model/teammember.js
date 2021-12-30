const {Sequelize,Model,DataTypes} = require('sequelize')
class TeamMember extends Model {
    static init(sequelize){
        return super.init(
            {
                id:{
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                userScore:{
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                    comment: '用户积分'
                }
            },
            { 
                sequelize, 
                freezeTableName: true,
                timestamps: true,
                paranoid: true,
                modelName: 'TeamMember', 
                comment: "团队成员"
            }
        )
    }
    static associate(models){
        models.TeamMember.belongsTo(models.Team)
        models.TeamMember.belongsTo(models.User)
    }
}

module.exports = TeamMember