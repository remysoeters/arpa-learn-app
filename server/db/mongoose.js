const mongoose = require ('mongoose')


const databaseName = 'arpa-learn-app'
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://localhost:27017/${databaseName}`)

module.exports = {
    mongoose
}