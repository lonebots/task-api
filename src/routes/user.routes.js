import express from 'express'
import { createUserHandler, getAllUsersHandler, getSingleUserHandler, updateUserHandler } from '../controller/user.controller.js'
import { protect } from '../middleware/auth.middleware.js'


const router = express.Router();

// create user 
router.route('/user').post(protect, createUserHandler)

// update user 
router.route('/user/:id').patch(protect, updateUserHandler)

// delete user 
router.route('/user/:id').delete((req, res) => res.send("user deletion route"))

//get all user
router.route('/users').get(protect, getAllUsersHandler)

//get single user 
router.route('/user/:id').get(protect, getSingleUserHandler)

export default router;




