const {Sequelize,Model,DataTypes} = require('sequelize')
class TeamGroupAdmin extends Model {
    static init(sequelize){
        return super.init(
            {
                id:{
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                adminType:{
                    type: DataTypes.INTEGER,
                    comment: "团队群组管理员类型 0 主要负责人 1 协助管理员"
                }
            },
            { 
                sequelize, 
                freezeTableName: true,
                modelName: 'TeamGroupAdmin', 
                comment: "团队群组"
            }
        )
    }
    static associate(models){
        models.TeamGroupAdmin.belongsTo(models.TeamGroup)
        models.TeamGroupAdmin.belongsTo(models.User)
    }
}

module.exports = TeamGroupAdmin