const {Sequelize,Model,DataTypes} = require('sequelize')
class TeamAdmin extends Model {
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