const usersRouter = require('express').Router()
const createUser = require('./actions/createUser')
const login = require('./actions/login')

usersRouter.post('/', createUser)
usersRouter.post('/login', login)

module.exports = usersRouter
