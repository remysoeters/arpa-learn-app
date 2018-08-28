const mongoose = require ('mongoose')


mongoose.Promise = global.Promise
// let db = {
//     localhost: 'mongodb://localhost:27017/arpa-learn-app',
//     mlab: ''
//   };
  
mongoose.connect('mongodb://testuser:testuser1@ds235732.mlab.com:35732/arpa-learn-database'|| db.localhost);
console.log(process.env.MONGODB_URI)

module.exports = {
    mongoose
}