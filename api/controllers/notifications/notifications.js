const notificationsRouter = require('express').Router()
const userExtractor = require('../../middlewares/userExtractor')
const getAllNotificationsByUser = require('./actions/getAllNotificationsByUser')

notificationsRouter.get('/byUser', userExtractor, getAllNotificationsByUser)

module.exports = notificationsRouter
