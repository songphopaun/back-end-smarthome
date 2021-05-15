const express = require('express');
const router = express.Router()
const modal = require('../controllers/modal')

router.post('/addRoom',modal.addRoom)
router.put('/addDevice',modal.addDevice)
router.put('/addSensor',modal.addSensor)
router.post('/addUser',modal.addUser)
router.get('/icon',modal.icon)


module.exports = router