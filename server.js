import express from 'express';
import connectDB from './src/utils/connect.js'
import networkLogs from './src/middleware/networklogger.middleware.js'
import errorHandler from './src/middleware/errorhandle.middleware.js'
import Router from './src/routes/index.js'
import dotenv from 'dotenv'
dotenv.config();

const app = express(); //express app
const PORT = process.env.PORT;
connectDB()   //database connection

// parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router 
app.use(Router)

// error handlers
app.use(errorHandler) // error handling
app.use(networkLogs) // network logs

const server = app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})

//Handling unhandled promise rejections
process.on('unhandledRejection', (error, promise) => {
    console.log(`Error:${error.message}`);


    //Close the server and exit process
    server.close(() => { process.exit(1) })
})