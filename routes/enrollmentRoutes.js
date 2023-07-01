const express = require('express')
const router = express.Router()

const enrollmentsController = require('../controllers/enrollmentsController')

router.get('/', enrollmentsController.getEnrollments)
router.post('/', enrollmentsController.addEnrollment)

module.exports= router