
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female", "Other"]
    },

    avatar: {
        type: String,
        required: true,
        trim: true
    },

    domain: {
        type: String,
        required: true,
        trim: true
    },
    available: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema)