var router = require('koa-router')()
const datalize = require('datalize');
const {Sequelize} = require('sequelize')
const {models} = require('../../../model/index.js');
const field = datalize.field;
router
.post('/register',datalize([
  // field('name').required() //应用版本
]),async (ctx, next) => {
  try {
    const asd =  await models.User.create({
      name:'111',
      nickname:'111',
      password:'111'
    })
    const asw =  await models.UserInfo.create({
      phone:'111',
      email:'111',
      UserId: asd.id
    })
    console.log(asw)
    ctx.fail('系统错误',500,asd)
  } catch (error) {
    ctx.fail('系统错误',500,error.message)
  }
})
.get('/:id',async (ctx, next) => {
    try {
      const asd =  await models.User.findOne({
        where:{
          id:ctx.params.id
        },
        attributes: [
          'nickname',
          'name',
          [Sequelize.col('UserInfo.phone'), 'phone'],
          [Sequelize.col('UserInfo.email'), 'email']
        ],
        include:[{
          attributes: [],
          model:models.UserInfo,
          require: false,
        }]
      })
      ctx.success(asd)
    } catch (error) {
      ctx.fail('系统错误',500,error.message)
    }
})
module.exports = router