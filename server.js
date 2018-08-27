// frameworks inladen


const express = require('express')
const hbs = require('hbs')

// server setup
const port = process.env.PORT || 3000

var app = express();

// hbs setup
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// server config


app.use(express.static(__dirname + '/public'))

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

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
});


