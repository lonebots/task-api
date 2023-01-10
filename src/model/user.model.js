import mongoose from 'mongoose'
import argon2 from 'argon2'

//user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

// user schema pre save hook to hash password 
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const hash = await argon2.hash(this.password); //hashing the password
    this.password = hash;
    return next();
})

//utility to compare provided password and hash
userSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        return await argon2.verify(this.password, candidatePassword)
    } catch (error) {
        console.log('Could not verify user', error)
        return false;
    }
}

export default mongoose.model("User", userSchema);