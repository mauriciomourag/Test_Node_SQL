const express = require('express')
const router = express.Router()

const coursesController = require('../controllers/coursesController')

router.get('/', coursesController.getcourse)
router.get('/:id', coursesController.getCourseById)
router.post('/',coursesController.addcourse)

module.exports= router