const {MongoClient, ObjectID} = require('mongodb')
const database = 'arpa-learn-database'
const dbUrl = `mongodb://localhost:27017/${database}`



MongoClient.connect(dbUrl, (error, client) =>{
    if(error){
       return console.log('Error; Database connection failed')
    }

    console.log('Test')
    const db = client.db(database)
    const collection = 'questions'

    db.collection(collection).findOneAndUpdate({_id: new ObjectID("5b83f99e1bb64451c4d85b0c")}, {
        $set:{completed:true},

    }, {
        returnOriginal:false
    }).then((result)=>{
        console.log(result)
    })


})