/**
 * 创建独一无二的token
 */

const jwt = require('jsonwebtoken') // 单点登录

module.exports = function(name) {
  /**
   * expiresIn [用来描述有效时间]
   */
  const token = jwt.sign({
    name: name
  }, 'secret', {expiresIn: '5s'})
  return token
}
