require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const connect = require('./utils/connect.js')


const app = express();
const PORT = process.env.PORT;
connect()
app.get('/healthcheck', (req, res) => res.send('hello world'))


app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})