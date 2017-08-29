const express = require('express')
const UserController = require('../controller')
const router = express.Router()

UserController(router)

module.exports = router
