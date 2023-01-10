import adminModel from '../model/admin.model.js'


// validating password 
export async function validatePassword(input) {
    console.log('comparing password')
    const { username, password } = input;
    const user = await findbyUsername(username)    // find user
    if (!user) {
        return false
    }
    
    const isValid = await user.comparePassword(password);
    if (!isValid) {
        return false
    }
    return user;
}

export const findUserById = async (userId) => {
    return await adminModel.findById(userId);
}

export const findbyUsername = async (username) => {
    const user = await adminModel.findOne({ username })
    return user;
}