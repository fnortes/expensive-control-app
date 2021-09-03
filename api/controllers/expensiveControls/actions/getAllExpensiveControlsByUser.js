const User = require('../../../models/User')
const { mapUserExpensiveControls } = require('../helpers')

const getAllExpensiveControlsByUser = async (req, res) => {
  const { userId } = req

  const user = await User.findById(userId).populate('expensiveControls', {
    name: 1,
    permissions: {
      $filter: {
        input: '$permissions',
        as: 'perm',
        cond: { $eq: ['$$perm.email', 'francisco.nortes@gmail.com'] }
      }
    }
  })

  if (!user) {
    return res.status(404).json({
      error: 'User not found'
    })
  }

  res.json(mapUserExpensiveControls(user.expensiveControls))
}

module.exports = getAllExpensiveControlsByUser
