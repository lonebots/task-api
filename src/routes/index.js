import express from 'express'
import userRoute from './user.routes.js'
import adminRoute from './auth.routes.js'

const Router = express.Router();


// health check
Router.route('/healthcheck').get((req, res) => res.status(200).send("server up and running"))
Router.get('/', (req, res) => { res.status(200).json({ "success": true, "message": "Server succesfully started and running" }) })


// user route
Router.use('/api', userRoute)

// admin route
Router.use('/api/admin', adminRoute)


export default Router;