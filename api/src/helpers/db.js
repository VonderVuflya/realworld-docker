const mongoose = require('mongoose')

module.exports.connectDb = () => {
  mongoose.connect(db)

  return mongoose.connection
}
