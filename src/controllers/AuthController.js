const authService = require('../services/AuthService');

const login = async (req, res) => {
    try {
        const {statusCode, message, token} = await authService.loginUser(req.body);
        res.status(statusCode).json({message, token});
    } catch (error) {
        console.log(error);
        res.json({message: "Something went wrong."});
    }
}

const register = async (req, res) => {
    try {
        const { message } = await authService.registerUser(req.body)
        res.json({ message })
    } catch (error) {
        console.log(error);
        res.json({message: "Something went wrong."})
    }
}

module.exports = {
    login,
    register
}