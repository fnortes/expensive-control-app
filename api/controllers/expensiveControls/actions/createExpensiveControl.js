const { PERMISSIONS } = require('../../../constants')
const ExpensiveControl = require('../../../models/ExpensiveControl')
const User = require('../../../models/User')
const {
  processPermissionsToSave,
  savePermissionsToUsers
} = require('../helpers')

const createExpensiveControl = async (req, res, next) => {
  const { name, permissions = [] } = req.body
  const { userId } = req
  const user = await User.findById(userId)

  if (!name) {
    return res.status(400).json({
      error: 'Name is missing'
    })
  }

  if (!user) {
    return res.status(404).json({
      error: 'User not found'
    })
  }

  let newPermisions = []

  try {
    newPermisions = await processPermissionsToSave(permissions, user.email)
  } catch (err) {
    const { message: error } = err
    return res.status(400).json({ error })
  }

  newPermisions.push({
    userId: user._id,
    email: user.email,
    assignedAt: new Date().toISOString(),
    permission: PERMISSIONS[2]
  })

  const newExpensiveControl = new ExpensiveControl({
    name,
    permissions: newPermisions
  })

  try {
    const savedExpensiveControl = await newExpensiveControl.save()

    savePermissionsToUsers(newPermisions, savedExpensiveControl)

    res.status(201).json(savedExpensiveControl)
  } catch (err) {
    next(err)
  }
}

module.exports = createExpensiveControl
