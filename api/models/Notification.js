const { Schema, model } = require('mongoose')

const notificationSchema = new Schema({
  message: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  read: Boolean,
  createdAt: Date
})

notificationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = document._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Notification = model('Notification', notificationSchema)

module.exports = Notification
