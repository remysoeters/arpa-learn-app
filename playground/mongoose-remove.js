
const {ObjectID} = require('mongodb')
const {mongoose} = require('../server/db/mongoose')
const {Question} = require('../server/models/questionModel')
const {User} = require('../server/models/userModel')

// Question.remove({}).then((result)=>{
//     console.log(result)
// })

Question.findByIdAndRemove('5b8544257eae2b33348c22d9').then((document)=>{
    console.log(document)
})