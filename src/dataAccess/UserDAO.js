const { User } = require("../models/UserModel.js");

const create = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save();
} 
const getUsers = async () => await User.find();
const getUserById = async (id) => await User.findById(id).find().sort({ createdAt: -1 });
const updateUser = async (id, userData) => await User.findByIdAndUpdate({_id: id}, userData, {new: true});
const deleteUser = async (id) => await User.findByIdAndDelete(id);

module.exports = {
    create,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}