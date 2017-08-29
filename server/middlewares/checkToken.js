/**
 * 验证token是否
 */
 const jwt = require('jsonwebtoken')
 module.exports = function(req,res,next){
   let token = req.headers['autorization'].split(' ')[1] // 解构token，生成对象{name:xx,iat:xx,exp:xx}
   let decoded = jwt.decode(token,'secret')

   if(token&&decoded.exp<=Date.now()/1000){
     return res.json({
       code: 401,
       message: 'token过期，请重新登录'
     })
   }
 }
