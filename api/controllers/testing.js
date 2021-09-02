const testingRouter = require('express').Router()
// const userExtractor = require('../middlewares/userExtractor')
const ExpensiveControl = require('../models/ExpensiveControl')
const User = require('../models/User')

testingRouter.post('/reset', async (req, res) => {
  await ExpensiveControl.deleteMany({})
  await User.deleteMany({})

  res.status(204).end()
})

module.exports = testingRouter
