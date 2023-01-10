import express from 'express'
import userRoute from './user.routes.js'

const Router = express.Router();

//route prefix
//add user routes 
Router.use('/api', userRoute)

// health check
Router.route('/healthcheck').get((req, res) => res.status(200).send("server up and running"))


export default Router;