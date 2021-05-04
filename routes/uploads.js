const express = require('express');
const router = express.Router()
const uploads = require('../controllers/uploads')
const upload = require('../middleware/upload')

router.post('/uploads',upload.single('icon'),uploads.uploadIcon)

module.exports = router