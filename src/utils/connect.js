import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const dbUri = process.env.DB_URI;

async function connect() {
    mongoose.set('strictQuery', false);
    mongoose.connect(dbUri);
    console.log("Db connected");
}

export default connect;
