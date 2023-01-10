import userModel from '../model/user.model.js'

// create a new user 
export const createUser = async (userData) => {
    return await userModel.create(userData);
}

// find singel user 
export const findUserById = async (userId) => {
    return await userModel.findById(userId);
}

// find all users
export const findAllUsers = async () => {
    return await userModel.find();
}

// update user 
export const findAndUpdateUser = async (userId, userData) => {
    return await userModel.findByIdAndUpdate(userId, userData)
}


// delete user 
export const deleteUserById = async (userId) => {
    return await userModel.findByIdAndRemove(userId );
}

