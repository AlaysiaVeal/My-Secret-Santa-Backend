const Router = require('express').Router()
const controller = require('../controllers/authController')

Router.post('/login', controller.Login)
Router.post('/register', controller.Register)
Router.put('/profile', controller.updatePassword)
Router.get('/session', controller.CheckSession)

module.exports = Router
