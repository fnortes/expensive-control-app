const bcrypt = require('bcrypt')
const User = require('../../../models/User')
const { buildToken } = require('../helpers')

const login = async (req, res) => {
  const { body } = req
  const { email, password = '' } = body

  const user = await User.findOne({ email })

  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: 'Invalid user or password'
    })
  }

  res.json(buildToken(user))
}

module.exports = login
