import axios from 'axios'
import { API_BASE_URL, LOCAL_STORAGE_USER_DATA } from 'commons/constants'

const getToken = () => {
  const loggedUserJSON = window.sessionStorage.getItem(LOCAL_STORAGE_USER_DATA)

  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)

    return `Bearer ${user.token}`
  }

  return null
}

const login = async (credentials) => {
  const { data } = await axios.post(`${API_BASE_URL}/login`, credentials)
  return data
}

const register = async (userData) => {
  const { data } = await axios.post(`${API_BASE_URL}/users`, userData)
  return data
}

export default { login, getToken, register }
