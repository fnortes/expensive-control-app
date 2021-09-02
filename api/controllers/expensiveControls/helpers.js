const { isValidEmail, isValidPermission } = require('../../helpers')
const User = require('../../models/User')

const processPermissions = (permissions, ownerEmail) =>
  Promise.all(
    permissions
      .filter((permission) => permission.email !== ownerEmail)
      .map(async ({ email, permission }) => {
        if (!email || !isValidEmail(email)) {
          throw new Error(
            'User email of a permission is missing or is not valid'
          )
        }

        if (permission && !isValidPermission(permission)) {
          throw new Error(`${permission} is not a valid permission value`)
        }

        const userByEmail = await User.findOne({ email })

        return {
          userId: userByEmail ? userByEmail._id : null,
          email,
          assignedAt: new Date().toISOString(),
          permission
        }
      })
  )

const savePermissionsToUsers = (newPermisions, savedExpensiveControl) => {
  newPermisions
    .filter((permission) => permission.userId !== null)
    .forEach(async (permission) => {
      const permissionUser = await User.findById(permission.userId)

      permissionUser.expensiveControls.push(savedExpensiveControl._id)

      await permissionUser.save()
    })
}

module.exports = { processPermissions, savePermissionsToUsers }
