const authDAO = require('../dataAccess/AuthDAO.js');
const { generateRandomTokenWithJWT } = require('../utils/AuthUtil.js');

const loginUser = async (userData) => {
    let token = '';
    const user = await authDAO.loginUser(userData);
     if(user){
        return { statusCode: 401, message: "Invalid Credentials", token }
     }
    const isMatch = await bcrypt.compare(userData.password, user.password);
    if(!isMatch) {
        return { statusCode: 401, message: "Invalid Credentials", token }
     }
     token = generateRandomTokenWithJWT(user);
     return { statusCode: 401, message: "Success", token }
}
const registerUser = async (userData) => await authDAO.registerUser(userData);

module.exports = {
    loginUser,
    registerUser
}