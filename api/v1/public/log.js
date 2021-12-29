var router = require('koa-router')()
const datalize = require('datalize');
const field = datalize.field;
router
.post('/collect',datalize([
  field('version').required() //应用版本
]),async (ctx, next) => {
  try {
    ctx.fail('系统错误',500,error.message)
  } catch (error) {
    ctx.fail('系统错误',500,error.message)
  }
})
.get('/get',datalize.query([
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