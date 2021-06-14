import axios from 'axios'
import { API_BASE_URL } from 'commons/constants'

let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const login = async (credentials) => {
  const { data } = await axios.post(`${API_BASE_URL}/login`, credentials)
  return data
}

const register = async (userData) => {
  const { data } = await axios.post(`${API_BASE_URL}/users`, userData)
  return data
}

export default { login, setToken, register }
