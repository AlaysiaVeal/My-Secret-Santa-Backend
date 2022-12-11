const controller = require('../controllers/users')
const Router = require('express').Router()

Router.get('/', controller.getAllUsers)
Router.get('/:user_id', controller.getUserId)
Router.post('/register', controller.createUsers)
Router.put('/login/:user_id', controller.updateUser)
Router.delete('/:user_id', controller.deleteUsers)

module.exports = Router
