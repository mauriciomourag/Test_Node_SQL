const express = require('express')
const router = express.Router()

const coursesController = require('../controllers/coursesController')

router.get('/', coursesController.getcourse)
router.post('/',coursesController.addcourse)

module.exports= router