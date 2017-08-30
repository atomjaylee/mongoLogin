const express = require('express')
const model = require('../db') // 连接数据库并建立骨架+model
const router = express.Router() // express 路由
const moment = require('moment') // 解析、验证、操作、格式化日期的轻量
const objectIdToTimeStamp = require('objectid-to-timestamp') // 时间戳
const createToken = require('../middlewares/createToken') // 创建token
const checkToken = require('../middlewares/checkToken') // 校验token
const sha1 = require('sha1') // base64

/**
 * 开始写接口
 */

// 注册用户
const register = (req, res) => {
  let userRegister = new model.User({
    email: req.body.email,
    password: sha1(req.body.password),
    recheck: req.body.recheck,
    token: createToken(this.email)
  })
  // 将objectId转换成 用户创建时间
  userRegister.create_time = moment(objectIdToTimeStamp(userRegister._id)).format('YYYY-MM-DD HH:mm:ss')
  model.User.findOne({
    email: (userRegister.email).toLowerCase()
  }, (err, doc) => {
    if (err)
      console.log(err)
      // 用户名已经注册，不能注册
    if (doc) {
      res.json({success: false})
    } else {
      userRegister.save(err => {
        if (err)
          console.log(err)
        console.log('注册成功')
        res.json({suceess: true})
      })
    }
  })
}
// 登录
const Login = (req, res) => {
  let userLogin = new model.User({
    email: req.body.email,
    password: sha1(req.body.password),
    token: createToken(this.email)
  })
  model.User.findOne({
    email: userLogin.email
  }, (err, doc) => {
    if (err)
      console.log(err)
    if (!doc) {
      console.log('账号不存在')
      res.json({info: false})
    } else if (userLogin.password === doc.password) {
      console.log('登录成功')
      let name = req.body.email
      res.json({
        success: true,
        email: doc.email,
        time: moment(objectIdToTimeStamp(doc._id)).format('YYYY-MM-DD HH:mm:ss'),
        token: createToken(name)
      })
    } else {
      console.log('密码错误')
      res.json({success: false})
    }
  })
}
// 删除用户
const delUser = (req, res) => {
  model.User.findOneAndRemove({
    _id: req.body.id
  }, err => {
    if (err)
      console.log(err)
    console.log('删除成功')
    res.json({success: true})
  })
}
// 查看所有用户
const User = (req, res) => {
  model.User.find({}, (err, doc) => {
    if (err)
      console.log(err)
    res.send(doc)
  })
}
// 导出接口
module.exports = (router) => {
  router.post('/register', register),
  router.get('/user', checkToken, User),
  router.post('/login', Login),
  router.post('/delUser', checkToken, delUser)
}
