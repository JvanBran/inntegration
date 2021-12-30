const {Sequelize,Model,DataTypes} = require('sequelize')
class Team extends Model {
    static init(sequelize){
        return super.init(
            {
                id:{
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                teamname:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    comment: '团队名'
                }
            },
            { 
                sequelize, 
                freezeTableName: true,
                timestamps: true,
                paranoid: true,
                modelName: 'Team', 
                comment: "团队信息"
            }
        )
    }
    static associate(models){
        models.Team.hasOne(models.TeamInfo)
    }
}

module.exports = Team