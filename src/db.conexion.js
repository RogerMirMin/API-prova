const mongoose = require('mongoose');

const conexionDB = async () => {

    try {
        const DB = await mongoose.connect('mongodb://127.0.0.1:27017/BromesDB');
        //mongodb+srv://newuser:12345@cluster0.pb2n4iz.mongodb.net/db?retryWrites=true&w=majority
        console.log("Conexión satisfactoria", DB.connection.name);
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = conexionDB;
