import express from 'express'
import { createUserHandler, getAllUsersHandler, getSingleUserHandler, updateUserHandler } from '../controller/user.controller.js'

const router = express.Router();

// create user 
router.post('/user', createUserHandler)

// update user 
router.route('/user/:id').patch(updateUserHandler)

// delete user 
router.route('/user/:id').delete((req, res) => res.send("user deletion route"))

//get all user
router.route('/users').get(getAllUsersHandler)

//get single user 
router.route('/user/:id').get(getSingleUserHandler)

export default router;

//


