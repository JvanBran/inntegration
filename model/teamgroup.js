const {Sequelize,Model,DataTypes} = require('sequelize')
class TeamGroup extends Model {
    static init(sequelize){
        return super.init(
            {
                id:{
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                groupName:{
                    type: DataTypes.STRING,
                    comment: "团队群组名称"
                }
            },
            { 
                sequelize, 
                freezeTableName: true,

                modelName: 'TeamGroup', 
                comment: "团队群组"
            }
        )
    }
    static associate(models){
        models.TeamGroup.belongsTo(models.Team)
    }
}

module.exports = TeamGroup