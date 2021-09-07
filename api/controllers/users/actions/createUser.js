const bcrypt = require('bcrypt')
const User = require('../../../models/User')
const { buildToken } = require('../helpers')

const createUser = async (req, res) => {
  const { body } = req
  const { email, name, password } = body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    email,
    name,
    passwordHash
  })

  try {
    const savedUser = await user.save()

    res.status(201).json(buildToken(savedUser))
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = createUser
