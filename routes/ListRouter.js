const Router = require('express').Router()
const controller = require('../controllers/lists')

Router.get('/', controller.getAllLists)
Router.get('/:list_id', controller.getListId)
Router.post('/', controller.createLists)
Router.put('/:list_id', controller.updatedList)
Router.delete('/:list_id', controller.deleteLists)

module.exports = Router
