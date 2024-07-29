const express = require("express")
const router = express.Router()
const { randomGetUniqueName } = require("../utils/room.utils")
router.get('/joinRoom', (req,res) => {
    res.status(200).send("Hello World!")
})

router.get('/createRoom', (req, res) => {
    const roomURL = randomGetUniqueName();
    res.status(200).json({ roomURL })
})

module.exports = router