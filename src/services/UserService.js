const userDAO = require('../dataAccess/UserDAO.js');

const getUsers = async () => await userDAO.getUsers();
const getUserById = async (id) => await userDAO.getUserById(id);
const createUser = async (userData) => await userDAO.create(userData);
const updateUser = async (id, userData) => await userDAO.updateUser(id, userData);
const deleteUser = async (id) => await userDAO.deleteUser(id);

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}