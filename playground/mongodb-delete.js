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
    
/*     
    Delete many
    db.collection(collection).deleteMany({text:'test'}).then((result)=>{
        console.log(result)
    }) */

/*     db.collection(collection).deleteOne({text:'Remy Soeters'}).then((result)=>{
        console.log(result)
    }) */


    db.collection(collection).findOneAndDelete({completed:false}).then((result)=>{
        console.log(result)
    })





    // client.close()

})