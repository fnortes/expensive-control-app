import { LOCAL_STORAGE_USER_DATA } from 'commons/constants'

export const getUser = () => {
  const loggedUserJSON = window.sessionStorage.getItem(LOCAL_STORAGE_USER_DATA)

  if (loggedUserJSON) {
    return JSON.parse(loggedUserJSON)
  }

  return null
}

export const getToken = () => {
  const user = getUser()

  if (user) {
    return `Bearer ${user.token}`
  }

  return null
}

export const saveUser = (user) =>
  window.sessionStorage.setItem(LOCAL_STORAGE_USER_DATA, JSON.stringify(user))

export const deleteUser = () =>
  window.sessionStorage.removeItem(LOCAL_STORAGE_USER_DATA)
