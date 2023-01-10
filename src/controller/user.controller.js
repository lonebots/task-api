import asyncHandler from '../middleware/async.middleware.js'
import { createUser, findAllUsers, findAndUpdateUser, findSingleUser } from '../service/user.service.js'


// create user
export const createUserHandler = asyncHandler(async (req, res, next) => {
    console.log('user creation started')
    const user = await createUser(req.body)
    if (!user) {
        //return next(new ErrorResponce('Error in creating the user ', 404));
        return next(new ErrorResponce("User not created", 400))
    }
    return res.status(200).json({ success: true, data: user });
})

// update user 
export const updateUserHandler = asyncHandler(async (req, res, next) => {
    const userId = req.params.id;
    const updatedUserData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        image: req.body.image
    }
    const user = await findAndUpdateUser(userId,updatedUserData);
    if (!user) {
        //return next(new ErrorResponce('Error in creating the user ', 404));
        return next(new ErrorResponce("User not found", 404))
    }
    return res.status(200).json({ success: true, data: user });
})

// delete user 
export const deleteUserHandler = asyncHandler(async (req, res, next) => {


})

// getusers
export const getAllUsersHandler = asyncHandler(async (req, res, next) => {
    const users = await findAllUsers()
    if (!users) {
        //return next(new ErrorResponce('Error in creating the user ', 404));
        return next(new ErrorResponce("No users found", 400))
    }
    return res.status(200).json({ success: true, data: users });
})

// getuser
export const getSingleUserHandler = asyncHandler(async (req, res, next) => {
    const user = await findSingleUser(req.params.id)
    if (!user) {
        //return next(new ErrorResponce('Error in creating the user ', 404));
        return next(new ErrorResponce("User not found", 404))
    }
    return res.status(200).json({ success: true, data: user });
})



