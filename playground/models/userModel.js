// const mongoose = require ('mongoose')


// const databaseName = 'arpa-learn-app'
// mongoose.Promise = global.Promise
// mongoose.connect(`mongodb://localhost:27017/${databaseName}`)


const UserModel = mongoose.model('user', {
    email:{
        type:String,
        required:true,
        minlength:8,
        trim:true,
    }
})

const newUser = new UserModel({
    email:'remy@arpa.nl'
})

newUser.save().then((doc)=>{
    console.log('Worked!' + doc)
},(error)=>{
    console.log('Failed' + error)
})
// email - requireit, trim, set type string, minlength