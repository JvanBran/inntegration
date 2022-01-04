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
                teamName:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    comment: '团队名'
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
                modelName: 'Team', 
                comment: "团队信息"
            }
        )
    }
    // static associate(models){
        
    // }
}

module.exports = Team