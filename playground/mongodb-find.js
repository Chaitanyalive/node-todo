//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) =>{
  if(err)
  {
    return console.log('Unable to connect to mongodb server');
  }
    console.log('Connected to mongodb server');
 const db = client.db('TodoApp');

//   db.collection('Todos').find({completed: false}).toArray().then((docs) =>{
// console.log(JSON.stringify(docs, undefined,2));
//   }, (err) =>{
//       console.log('Unable to fetch docs',err);
//   });

db.collection('Todos').find().count().then((count) =>{
console.log(`Todos Count:${count}`);
}, (err) =>{
    console.log('Unable to fetch docs',err);
});

    client.close();
});
