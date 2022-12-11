const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const ListRouter = require('./ListRouter')
const listUserRouter = require('./listUserRouter')
const AuthRouter = require('./AuthRouter')

Router.use('/user', UserRouter)
Router.use('/list', ListRouter)
Router.use('/user_list', listUserRouter)
Router.use('/users', AuthRouter)

module.exports = Router
