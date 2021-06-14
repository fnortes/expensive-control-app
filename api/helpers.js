const jwt = require('jsonwebtoken')

const buildToken = ({ _id, name, email }) => {
  const userForToken = {
    id: _id,
    email
  }

  const token = jwt.sign(userForToken, process.env.SECRET, {
    // expiresIn: 60 * 60 * 24 * 7
    expiresIn: 20
  })

  return {
    name,
    email,
    token
  }
}

module.exports = buildToken
