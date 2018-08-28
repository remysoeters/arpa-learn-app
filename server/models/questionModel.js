const mongoose = require('mongoose')

const Question = mongoose.model('Questions', {
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

module.exports = {
    Question
}