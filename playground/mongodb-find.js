const {MongoClient, ObjectID} = require('mongodb')
const database = 'arpa-learn-database'
const dbUrl = `mongodb://localhost:27017/${database}`



MongoClient.connect(dbUrl, (error, client) =>{
    if(error){
       return console.log('Error; Database connection failed')
    }

    console.log('connected to MongoDB server')
    const db = client.db(database)
    const collection = 'questions'

    db.collection(collection).find({completed:true}).toArray().then((docs)=>{
        console.log(collection)
        console.log(JSON.stringify(docs, undefined, 2))
    }, (error)=>{
        console.log('unable to fetch questions', error)
    })







    // client.close()

})