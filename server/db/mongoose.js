const mongoose = require ('mongoose')


mongoose.Promise = global.Promise

const connection = process.env.MONGODB_URI || 'mongodb://localhost:27017/arpa-learn-app'

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/arpa-learn-app');
console.log(connection)

module.exports = {
    mongoose
}

