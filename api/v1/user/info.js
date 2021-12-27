var router = require('koa-router')()
const datalize = require('datalize');
const sequelize = require('../../../models/index.js')
const field = datalize.field;
router
.post('/register',datalize([
  field('version').required() //应用版本
]),async (ctx, next) => {
  try {
    ctx.fail('系统错误',500,error.message)
  } catch (error) {
    ctx.fail('系统错误',500,error.message)
  }
})
.get('/login',datalize.query([
    field('pageNo').required().min(1), //当前页码
    field('pageSize').required().min(1), //页面条数
  ]),async (ctx, next) => {
    try {
      ctx.fail('系统错误',500,error.message)
    } catch (error) {
      ctx.fail('系统错误',500,error.message)
    }
})
module.exports = router