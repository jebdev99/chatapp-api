const { User } = require('../models/UserModel.js');

const loginUser = async (userData) => await User.findById({ email: userData.email});
const registerUser = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save();
}

module.exports = {
    loginUser,
    registerUser
}