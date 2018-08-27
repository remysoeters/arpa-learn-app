const MongoClient = require('mongodb').MongoClient
const database = 'arpa-learn-database'
const dbUrl = `mongodb://localhost:27017/${database}`



MongoClient.connect(dbUrl, (error, client) =>{
    if(error){
       return console.log('Error; Database connection failed')
    }

    console.log('connected to MongoDB server')
    const db = client.db(database)

    db.collection('questions').insertOne({
        text:'something to do',
        completed:false
    }, (error, result)=>{
        if(error){
            return console.log('Unable to add question', error)
        }



        console.log(JSON.stringify(result.ops, undefined, 2))
    })

    client.close()

})