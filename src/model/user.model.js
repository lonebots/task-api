import mongoose from 'mongoose'

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


export default mongoose.model("User", userSchema);