var router = require('koa-router')()
const datalize = require('datalize');
const {Sequelize,Op} = require('sequelize')
const {models} = require('../../../model/index.js');
const field = datalize.field;
router
// 创建团队 TODO
.post('/register',datalize([
  field('name').required(), //用户名
  field('password').required(), //密码
  field('phone').required().phone(), //手机
  field('email').required().email(), //邮箱
  field('nickName').required(), //昵称
]),async (ctx, next) => {
  try {
    const { name, password, phone, email, nickName} = ctx.request.body
    const info = await models.UserInfo.findOne({ 
      where:{
        phone
      }
    })
    if(info){
      ctx.fail('用户已存在',9874,'用户已存在')
    }else{
      const user = await models.User.create({ name, password })
      await models.UserInfo.create({
        phone,
        email,
        UserId: user.id,
        nickName,
      })
      const userInfo = await models.User.findOne({
        where:{
          id: user.id
        },
        attributes: [
          'name',
          'userStatus',
          [Sequelize.col('UserInfo.phone'), 'phone'],
          [Sequelize.col('UserInfo.email'), 'email'],
          [Sequelize.col('UserInfo.user_from'), 'userFrom'],
          [Sequelize.col('UserInfo.nick_name'), 'nickName']
        ],
        include:[{
          attributes: [],
          model:models.UserInfo,
          require: false,
        }]
      })
      ctx.success(userInfo)
    } 
  } catch (error) {
    ctx.fail('系统错误',500,error.message)
  }
})
// 删除团队 TODO
.post('/register',datalize([
  field('name').required(), //用户名
  field('password').required(), //密码
  field('phone').required().phone(), //手机
  field('email').required().email(), //邮箱
  field('nickName').required(), //昵称
]),async (ctx, next) => {
  try {
    const { name, password, phone, email, nickName} = ctx.request.body
    const info = await models.UserInfo.findOne({ 
      where:{
        phone
      }
    })
    if(info){
      ctx.fail('用户已存在',9874,'用户已存在')
    }else{
      const user = await models.User.create({ name, password })
      await models.UserInfo.create({
        phone,
        email,
        UserId: user.id,
        nickName,
      })
      const userInfo = await models.User.findOne({
        where:{
          id: user.id
        },
        attributes: [
          'name',
          'userStatus',
          [Sequelize.col('UserInfo.phone'), 'phone'],
          [Sequelize.col('UserInfo.email'), 'email'],
          [Sequelize.col('UserInfo.user_from'), 'userFrom'],
          [Sequelize.col('UserInfo.nick_name'), 'nickName']
        ],
        include:[{
          attributes: [],
          model:models.UserInfo,
          require: false,
        }]
      })
      ctx.success(userInfo)
    } 
  } catch (error) {
    ctx.fail('系统错误',500,error.message)
  }
})
// 添加团队管理员 TODO
// 加入团队 TODO
// 团队成员删除 TODO
// 团队信息修改 TODO
// 团队商品新增 TODO
// 团队商品修改 TODO
// 团队商品删除 TODO
// 团队活动发布 TODO
// 团队积分排行 TODO
// 团队活动列表 TODO
// 查询团队详情 TODO
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