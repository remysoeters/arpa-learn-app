// frameworks inladen\
require('./config/config')


// library imports
const express = require('express')
const hbs = require('hbs')

const bodyParser = require('body-parser')
const {ObjectID} = require('mongodb')
const _ = require('lodash')

// local imports
const {User} = require('./models/userModel')
const {Question} = require('./models/questionModel')
const {mongoose} = require('./db/mongoose')

// server setup
const port = process.env.PORT


var server = express();
server.use(express.static(__dirname + '/public'))

server.use(bodyParser.json())

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }
  
server.use(express.static('public'))



server.post('/questions', (req, res)=> {
    // maakt nieuwe vraag aan
    const newQuestion = new Question({
        category:req.body.category,
        content: req.body.content,
        score:req.body.score,
        direction:req.body.direction,
        root:req.body.root,
        published:req.body.published
    })

    // slaat de vraagop 
    newQuestion.save().then((doc) =>{
        res.send(doc)
    }, (error)=>{
        res.status(400).send(error)

    })
})

server.patch('/questions/:id', (request, response)=>{
    const id = request.params.id;

    const body = _.pick(request.body, ['catergory', 'content', 'score', 'direction', 'root', 'published'])

    if(!ObjectID.isValid(id)){
        return res.status(404).send()
     }
    

})


server.delete('/questions/:id', (req, res)=>{
    // get ID from param
    const id = req.params.id


    //validate id with objectID > return 404
    if(!ObjectID.isValid(id)){
       return res.status(404).send()
    }
    // remove the todo by id
    Question.findByIdAndRemove(id).then((document)=>{
        if(!document){
            return res.status(404).send()
        }
        res.send(id)
    }).catch((error)=>{
        res.status(400).send()
    })
        // succes > 
            // if(!document){send()}
        // error > 400 > send()
})

server.get('/questions', (req, res)=>{
    Question.find().then((questions)=>{
        res.send({questions})
    },(error)=>{
        res.status(400).send(error)
    })
})

server.get('/questions/:id', (req, res)=>{

    const id = req.params.id
    if(!ObjectID.isValid(id)){
        return res.status(404).send()
    }

    Question.findById(id).then((question)=>{
        if(!question){
            return res.status(404).send()    
        }

        res.send({question})
    }).catch((error)=>{
        res.status(400).send()
    })

})




server.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
});


module.exports = {
    server
}