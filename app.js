const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const body = require('koa-body')
const logger = require('koa-logger')

//返回值封装
const routerResponse = require('./middleware/routerResponse')
//根据目录构建路由结构
const composeRouter = require('./middleware/composeRouter')
//校验参数
const datalizeVerify = require('./middleware/datalizeVerify')

// error handler
onerror(app)

// middlewares
app.use(body({
  multipart: true, // 支持文件上传
  formidable:{
    keepExtensions: true,    // 保持文件的后缀
    maxFileSize:20 * 1024 * 1024, // 文件上传大小
  }
}))
app.use(json({ limit: '50mb' }))
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(datalizeVerify())
app.use(routerResponse())
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(composeRouter(__dirname + '/api').routes());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
