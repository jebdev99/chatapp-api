const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/config');

const verifyToken = async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split('.')[1];
    if(token === null) {
        return res(401).json({message: "Unathorized Access"})
    }
    jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
        if(err) return res.status(403).json({message: 'Forbidden: Invalid Token'});
        req.user = decoded;
        next();
    })
}

module.exports = {
    verifyToken
}