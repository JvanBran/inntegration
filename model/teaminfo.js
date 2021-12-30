const {Sequelize,Model,DataTypes} = require('sequelize')
class TeamInfo extends Model {
    static init(sequelize){
        return super.init(
            {
                id:{
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                teamInfo:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    comment: '团队详情'
                },
                teamLogo:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    comment: '团队logo'
                }
            },
            { 
                sequelize, 
                freezeTableName: true,
                timestamps: true,
                paranoid: true,
                modelName: 'TeamInfo', 
                comment: "团队信息"
            }
        )
    }
    static associate(models){
        models.TeamInfo.belongsTo(models.Team)
    }
}

module.exports = TeamInfo