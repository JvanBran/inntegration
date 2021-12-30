const {Sequelize,Model,DataTypes} = require('sequelize')
class GoodsConvert extends Model {
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
                modelName: 'GoodsConvert', 
                comment: "团队商品兑换信息"
            }
        )
    }
    static associate(models){
        models.GoodsConvert.belongsTo(models.Team)
        models.GoodsConvert.belongsTo(models.TeamGoods)
        models.GoodsConvert.belongsTo(models.User)
    }
}

module.exports = GoodsConvert