const jwt = require('jsonwebtoken')
const { PERMISSIONS } = require('../../constants')

const buildToken = ({ _id, name, email }) => {
  const userForToken = {
    id: _id,
    email
  }

  const token = jwt.sign(userForToken, process.env.SECRET, {
    expiresIn: 60 * 60 * 24 * 7
    // expiresIn: 20
  })

  return {
    name,
    email,
    token
  }
}

const isValidEmail = (email) =>
  /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(
    email
  )

const isValidPermission = (permission) => PERMISSIONS.indexOf(permission) > -1

module.exports = { buildToken, isValidEmail, isValidPermission }
