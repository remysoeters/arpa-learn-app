const mongoose = require ('mongoose')


const databaseName = 'arpa-learn-app'
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://localhost:27017/${databaseName}`)

const QuestionModel = mongoose.model('question', {
    category:{
        type: String,
        required:true,
        minlength:1,
        trim:true,

    },
    content:{
        type: String,
        required:true,
        minlength:1,
        trim:true,
    },
    score:{
        type:Number,
        required:true,
        minlength:1,
        trim:true,

    },  
    direction:{
        type:String,
        required:true,
        minlength:1,
        trim:true,
    },
    root:{
        type:String,
        required:true,
        minlength:1,
        trim:true,
    },
    img:{
        type: String,
    },
    published:{
        type:Boolean,
        default:false,
        minlength:1,
        trim:true,

    },
})

const newQuestion = new QuestionModel({
    category:'intrinsic motivation',
    content:'Hier komt de vraag',
    score:5,
    direction:'positive',
    root:'Tijdens mijn werk',
    published:'false',

})

newQuestion.save().then((doc)=>{
    console.log('Saved question', doc)
}, (error)=>{
    console.log('unable to save todo', error)
})


