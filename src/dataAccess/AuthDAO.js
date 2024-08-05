const { User } = require('../models/UserModel.js');

const loginUser = async (userData) => await User.findOne({ email: userData.email});
const registerUser = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save();
}

const checkEmailBeforeRegister = async (userData) => await User.findOne({ email: userData.email })

module.exports = {
    loginUser,
    registerUser,
    checkEmailBeforeRegister
}