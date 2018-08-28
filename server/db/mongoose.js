const mongoose = require ('mongoose')


const databaseName = 'arpa-learn-app'
mongoose.Promise = global.Promise
const db = "mongodb://remy.soeters:B14rd3r822!@ds235732.mlab.com:35732/arpa-learn-database"
mongoose.connect(db || `mongodb://localhost:27017/${databaseName}`)

module.exports = {
    mongoose
}