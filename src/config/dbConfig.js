const mongoose = require('mongoose');
const serverConfig = require('./serverConfig')

// the below function help us to connect with mongodb server

async function connectDB() {
    try{
        await mongoose.connect(serverConfig.DB_URL)
        console.log("Successfully connected to mongodb server.......")
    }catch(error) {
        console.log("not able to connect with mongodb server...")
        console.log(error);
    }
}

module.exports = connectDB;