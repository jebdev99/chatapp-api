const express = require("express")
const router = express.Router()

const { login, register } = require("../controllers/AuthController");

router.get('/login', login);
router.post('/register', register);

module.exports = router;