// Go to database website
// create a free M0 cluster
// crete a user
// Get the connection string
// install a mongoDB compass
// create a database
// install mongodb packages
// create a connection from code
// perform CRUD operations - Create , Read , Update, Delete

const { MongoClient } = require('mongodb');


// Connection URL
const url = "mongodb+srv://pammykumaribth05_db_user:FtkGqOfGFqiMw354@namastenode.kbcceqr.mongodb.net/"
const client = new MongoClient(url);

// Database Name
const dbName = 'HelloWorld';


async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');


//   insert a data..
const data = {
    firstname : "Ranveer",
    lastname : "Singh",
    city : "Mumbai",
    phonenumber : "9967657667"
}

const insertResult = await collection.insertOne(data);
// console.log('Inserted documents =>', insertResult);

// // Update the data
// const updateResult = await collection.updateOne(
//     { lastname: "Padukon" },       // Which document to find
//     { $set: { lastname: "Shekhar" } } // What to update
// );

// console.log("Updated documents =>", updateResult);


// //   Read the data
// const findResult = await collection.find({}).toArray();
// console.log('Found documents =>', findResult);

// // count the data
// const countResult = await collection.countDocuments({});
// console.log("count of documents in the user collection =>",countResult);

// find the data
// const result = await collection.find({firstname : "Deepika"}).toArray();
// console.log("result =>",result);

  return 'done.';
}



main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());