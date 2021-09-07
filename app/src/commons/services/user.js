import axios from 'axios'

export const requestLogin = async (credentials) => {
  const { data } = await axios.post('/users/login', credentials)
  return data
}

export const requestRegister = async (userData) => {
  const { data } = await axios.post('/users', userData)
  return data
}
