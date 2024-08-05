const authDAO = require('../dataAccess/AuthDAO.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/config')

const loginUser = async (userData) => {
    let token = '';
    const user = await authDAO.loginUser(userData);
     if(!user){
        return { statusCode: 401, message: "Invalid Credentials", token }
     }
    const isMatch = await bcrypt.compare(userData.password, user.password);
    if(!isMatch) {
        return { statusCode: 401, message: "Invalid Credential", token }
     }
     token = jwt.sign({signId: user._id}, JWT_SECRET_KEY, {expiresIn: '1h'});
     return { statusCode: 200, message: "Success", token }
}
const registerUser = async (userData) => {
    const user = await authDAO.checkEmailBeforeRegister(userData);
    if(user) {
        return {
            message: "Email has been used"
        }
    }
    const data = await authDAO.registerUser(userData);
    token = jwt.sign({signId: data._id}, JWT_SECRET_KEY, {expiresIn: '1h'});
    return {
        message: "Registered",
        token
    }
}

module.exports = {
    loginUser,
    registerUser
}