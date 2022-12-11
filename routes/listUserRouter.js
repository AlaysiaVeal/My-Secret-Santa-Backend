const controller = require('../controllers/user-list')
const Router = require('express').Router()

Router.get('/', controller.getAllUsersList)
Router.get('/:user_lists_id', controller.getUserListId)
Router.post('/register', controller.createUsersList)
Router.put('/:user_lists_id', controller.updateUserList)
Router.delete('/:user_lists_id', controller.deleteUsersList)

module.exports = Router
