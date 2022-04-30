const mongoose = require('mongoose');
// const { MongoClient, ServerApiVersion, Db } = require('mongodb');
// const { mongoose } = require('mongoose');

const conexionDB = async() => {
    try {
        const DB = await mongoose.connect('mongodb+srv://admin:admin@parcial.kilyt.mongodb.net/Parcial?retryWrites=true&w=majority');
        // const DB = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        // DB.connect(err => {
        //     const collection = DB.db("Parcial").collection("Clientes_A");
        // console.log(DB.Schema);
        //     // perform actions on the collection object
        //     DB.close();
        // });
    } catch (error) {
        const uri = process.env.MONGODB_URI;
        console.log('mongodb + srv: //admin:admin@parcial.kilyt.mongodb.net/Parcial?retryWrites=true&w=majority');
        console.log('error')
    }
    // console.log(DB);
}



module.exports = conexionDB;


// module.exports = conexiondb;