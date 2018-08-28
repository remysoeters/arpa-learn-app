
const {ObjectID} = require('mongodb')
const {mongoose} = require('../server/db/mongoose')
const {Question} = require('../server/models/questionModel')
const {User} = require('../server/models/userModel')



const userId = '5b84ed35eb13161ff061327211aa'
User.find({id_: userId}).then((users)=>{
    console.log('Users', users)
})

User.findById(userId).then((user)=>{
    if(!user){
        return console.log('user not found')
    }

    console.log('User found', user.email)
}, (error)=>{
    console.log(error)
})

// const id = "5b8405959a1ebb5648e6a763123";
// if(!ObjectID.isValid(id)){
//     console.log('Is id not valid')
// }


// // Question.find({
// //     _id:id
// // }).then((questions)=>{
// //     console.log('Questions', questions)
// // })

// // Question.findOne({ _id:id
// // }).then((question)=>{
// //     console.log('Questions', question)
// // })

// Question.findById(id).then((question)=>{
//     if(!question){
//         return console.log('Question not found')
//     }
//     console.log('Question By id', question)
// }).catch((error)=>{
//     console.log(error)
// })


