// frameworks inladen

// library imports
const express = require('express')
const hbs = require('hbs')
const {mongoose} = require('./db/mongoose')
const bodyParser = require('body-parser')

// local imports
const {User} = require('./models/userModel')
const {Question} = require('./models/questionModel')

// server setup
const port = process.env.PORT || 3000;


var app = express();

// hbs setup
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// server config


app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())

app.post('/questions', (req, res)=> {
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

app.get('/questions', (req, res)=>{
    Question.find().then((questions)=>{
        res.send({questions})
    },(error)=>{
        res.status(400).send(error)
    })
})



app.get('/',(req, res)=> {
    res.render('vragenlijst.hbs', {
        pageTitle:'Vragenlijst',
        copyrightDate: new Date().getFullYear()
    })
})

app.get('/login', (request, response)=>{
    response.render('login.hbs', {
        pageTitle:'login page'
    })
})

app.get('/arpist', (request, response)=>{
    response.render('arpisten.hbs', {
        pageTitle:'ARPISTEN panel'
    })
})

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
});


module.exports = {
    app
}