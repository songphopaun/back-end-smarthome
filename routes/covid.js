const express = require('express');
const router = express.Router()
const covid = require('../controllers/covid')

router.get('/covid',covid.covid_update)


module.exports = router