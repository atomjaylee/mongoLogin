const express = require('express')
const path = require('path')
const bodyParser = require('body-parser') // 解析http请求体
const cookieParser = require('cookie-parser') // cookie中间件
const logger = require('morgan') // 请求日志
const config = require('config-lite') // 配置模块
const compression = require('compression') // nodeJs中间件 - 压缩
const routes = require('./server/routes')
const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use(compression({threshold: 0}))
app.use('/api', routes)
app.use(function(req, res, next) {
  var err = new Error('没找到该页面')
  err.status = 404
  next(err)
})

app.listen(3000, function() {
  console.log(`服务在端口8080跑起来了`)
})
