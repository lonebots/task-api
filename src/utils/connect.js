const mongoose = require('mongoose');
const logger = require('./logger')
const dbUri = process.env.DB_URI;

const connect = async () => {
    mongoose.set('strictQuery', false);
    await mongoose.connect(dbUri,);
    console.log("Db connected successfully");
}

module.exports = connect;

