const express = require('express');
const router = express.Router()
const chart = require('../controllers/chart')
const authenticate =require('../middleware/Authentication')

router.get('/chartNameSensor',chart.chartNameSensor)
router.get('/chartDataSensor',authenticate.authenticate,chart.chartDataSensor)
router.get('/chartDataOneSensor',authenticate.authenticate,chart.chartDataOneSensor)
router.get('/chartDataSensor2',chart.chartDataSensor2)
router.get('/chartDataOneSensor2',chart.chartDataOneSensor2)
router.get('/chartPower',chart.chartPower)


module.exports = router