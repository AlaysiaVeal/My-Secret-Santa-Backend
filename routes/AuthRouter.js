const Router = require('express').Router()
const controller = require('../controllers/authController')

Router.get('/login', controller.Login)
Router.get('/register', controller.Register)
Router.put('/profile', controller.updatePassword)
Router.get('/session', controller.CheckSession)

module.exports = Router
