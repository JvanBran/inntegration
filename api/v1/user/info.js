var router = require('koa-router')()
const datalize = require('datalize');
const {Sequelize,Op} = require('sequelize')
const {models} = require('../../../model/index.js');
const field = datalize.field;
router
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
.post('/retrieve',datalize([
  field('password').required(), //密码
  field('npassword').required(), //密码
  field('phone').phone(), //手机
  field('email').email(), //邮箱
]),async (ctx, next) => {
  try{
    const { password, phone='', email='',npassword} = ctx.request.body
    const info = await models.UserInfo.findOne({ 
      where:{
        [Op.or]:[
          {phone:phone},
          {email:email}
        ]
      }
    })
    if(info){
      const user = await models.User.findOne({ id: info.UserId})
      if(user.password == password){
        await models.User.update({'password':npassword},{
          where:{
            id: info.UserId
          }
        })
        ctx.success({},'修改成功')
      }else{
        ctx.fail('密码错误',500,'密码错误')
      }
    }else{
      ctx.fail('无此用户',500,'无此用户')
    }
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