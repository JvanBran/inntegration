const {Sequelize,Model,DataTypes} = require('sequelize')
class TeamGoods extends Model {
    static init(sequelize){
        return super.init(
            {
                id:{
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                goodsName:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    comment: '商品信息'
                },
                goodsPicture:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    comment: '商品照片'
                },
                goodsTitle:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    comment: '商品标题'
                },
                goodsAmount:{
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    comment: '商品数量'
                },
                goodsScore:{
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    comment: '商品积分'
                }
            },
            { 
                sequelize, 
                freezeTableName: true,
                modelName: 'TeamGoods', 
                comment: "团队商品信息"
            }
        )
    }
    static associate(models){
        models.TeamGoods.belongsTo(models.Team)
    }
}

module.exports = TeamGoods