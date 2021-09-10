const Notification = require('../../../models/Notification')

const getAllNotificationsByUser = async (req, res) => {
  const { userId } = req

  const notifications = await Notification.find({ userId })

  res.json(notifications)
}

module.exports = getAllNotificationsByUser
