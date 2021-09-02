const { Schema, model } = require('mongoose')
const { PERMISSIONS } = require('../constants')

const expensiveControlSchema = new Schema({
  name: String,
  permissions: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      email: String,
      assignedAt: Date,
      permission: {
        type: String,
        enum: PERMISSIONS,
        default: PERMISSIONS[0]
      }
    }
  ]
})

expensiveControlSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = document._id
    delete returnedObject._id
    delete returnedObject.__v

    if (returnedObject.permissions) {
      returnedObject.permissions.forEach((permission) => {
        delete permission._id
      })
    }
  }
})

const ExpensiveControl = model('ExpensiveControl', expensiveControlSchema)

module.exports = ExpensiveControl
