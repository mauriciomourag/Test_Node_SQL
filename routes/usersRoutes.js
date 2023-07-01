const express = require('express')
const router = express.Router()

const usersController = require('../controllers/usersController')

router.get('/', usersController.getUsers)
router.get('/:id', usersController.getUserById)
router.post('/cadastro',usersController.addUser)

module.exports= router