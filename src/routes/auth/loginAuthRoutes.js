const express = require("express")
const router = express.Router()
const multer = require("multer");
const upload = multer();
const { NewUser } = require("../../models/UserModel.js");

router.get('/login', async (req, res) => {
    const { email, password } = req.query;
    res.json({message: "Logged In"})
})

module.exports = router