const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test')
mongoose.Promise = global.Promise

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connect error'))
db.once('open', function() {
  console.log('Mongodb strated successfully')
})

let userSchema = mongoose.Schema({
  email: String,
  password: String,
  recheck: String,
  token: String,
  create_time: Date
},{
  versionKey: false
})

let model = {
  User: mongoose.model('User', userSchema)
}

module.exports = model
