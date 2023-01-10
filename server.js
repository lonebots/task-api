require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')


const app = express();
const port = process.env.PORT || 4000;

app.get('/healthcheck', (req, res) => res.send('hello world'))


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})