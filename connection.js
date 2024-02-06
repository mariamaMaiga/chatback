const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://marie:E2i4Hns0OmpPLzhK@cluster0.glx2k.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


// or

mongoose.connect("mongodb+srv://marie:E2i4Hns0OmpPLzhK@cluster0.glx2k.mongodb.net/?retryWrites=true&w=majority"

)
.then(()=>console.log('connected'))
.catch(e=>console.log(e));

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    //const mongoConnection =  await client.db('chatdb').native;
    //const mongooseConnection = mongoose.createConnection({ useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, native_parser: true });
    //mongooseConnection.mongo = mongoConnection;

    conn = await client.db("chatdb");
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    //console.log(conn)
    const mongooseConnection = mongoose.createConnection();  
    mongooseConnection.client = await client;
    //console.log(mongooseConnection.client)

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
