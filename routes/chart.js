const express = require('express');
const router = express.Router()
const chart = require('../controllers/chart')
const authenticate =require('../middleware/Authentication')

router.get('/chartNameSensor',chart.chartNameSensor)
router.get('/chartDataSensor',authenticate.authenticate,chart.chartDataSensor)
router.get('/chartDataOneSensor',authenticate.authenticate,chart.chartDataOneSensor)
router.get('/chartDataSensor2',authenticate.authenticate,chart.chartDataSensor2)


module.exports = router