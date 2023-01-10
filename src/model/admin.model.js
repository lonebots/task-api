import mongoose from 'mongoose'
import argon2 from 'argon2'

//user schema
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
})

// admin schema pre save hook to hash password 
adminSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const hash = await argon2.hash(this.password); //hashing the password
    this.password = hash;
    return next();
})

//utility to compare provided password and hash
adminSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        return await argon2.verify(this.password, candidatePassword)
    } catch (error) {
        console.log('Could not verify user', error)
        return false;
    }
}

export default mongoose.model("Admin", adminSchema);