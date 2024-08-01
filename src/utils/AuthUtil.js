const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const generateRandomTokenWithJWT = (user) =>  {
    const secretKey = crypto.randomBytes(32).toString('base64');
    return jwt.sign({signId: user._id}, secretKey, {expiresIn: '1h'});
}

module.exports = {
    generateRandomTokenWithJWT
}