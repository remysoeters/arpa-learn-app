const mongoose = require ('mongoose')


const databaseName = 'arpa-learn-app'
mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGODB_URI)

module.exports = {
    mongoose
}