const authService = require('../services/AuthService');

const login = async (req, res) => {
    try {
        const {statusCode, message, token} = await authService.loginUser(req.query);
        console.log({statusCode, message, token});
        res.status(statusCode).json({message, token});
    } catch (error) {
        console.log(error);
        res.json({message: "Something went wrong."});
    }
}

const register = async (req, res) => {
    try {
        await authService.registerUser(req.body)
        res.json({message: "Registered"})
    } catch (error) {
        console.log(error);
        res.json({message: "Something went wrong."})
    }
}

module.exports = {
    login,
    register
}