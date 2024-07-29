const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const { index, show, create, update, destroy } = require("../controllers/UserController");

router.get('/', index)
router.get('/:id', show)
router.post('/create', create)
router.put('/update', update)
router.delete('/:id', destroy)

module.exports = router