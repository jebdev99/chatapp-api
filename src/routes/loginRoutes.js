const express = require("express")
const router = express.Router()
const multer = require("multer");
const { checkSelector, roomIds } = require("../services/room.services.js");
const { routeResponse } = require("../utils/route.utils.js");
const { openConnection, closeConnection } = require("../config/config.js");
const upload = multer();
const { NewUser } = require("../models/UserModel.js");

router.get('/', async (req, res) => {

    res.status(200).json({test})
});

router.get('/create', (req, res) => {
    openConnection();
    NewUser.save()
    .then(() => console.log('New User Saved'))
    .then(() => res.json({message: "New User Save"}))
    .catch((err) => console.log('New User Not Saved',err))
    .finally(() => closeConnection())
})

module.exports = router