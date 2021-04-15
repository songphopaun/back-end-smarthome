const express = require('express');
const router = express.Router()
const room = require('../controllers/room')

router.get('/listroom',room.listRoom)
router.get('/dataroom',room.dataRoom)
router.get('/deviceroom',room.deviceRoom)
router.put('/switchroom',room.switchRoom)

module.exports = router