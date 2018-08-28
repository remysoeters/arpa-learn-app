const mongoose = require ('mongoose')


mongoose.Promise = global.Promise
let db = {
    localhost: 'mongodb://localhost:27017/arpa-learn-app',
    mlab: 'mongodb://testuser:testuser1@ds235732.mlab.com:35732/arpa-learn-database'
  };
  
  mongoose.connect( db.localhost || db.mlab);


module.exports = {
    mongoose
}