const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const { hashPasswordOnSave, hashPasswordOnUpdate } = require('../middlewares/hashPassword');

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})


// Middleware to hash password before saving a new user or updating a user
UserSchema.pre('save', hashPasswordOnSave)

// Middleware to hash password before updating a user
UserSchema.pre('findOneAndUpdate', hashPasswordOnUpdate);

const User = mongoose.model('User', UserSchema)

module.exports = { User }
