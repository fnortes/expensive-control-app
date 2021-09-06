import axios from 'axios'
import { API_BASE_URL } from 'commons/constants'
import userService from 'LoginPage/services/user'

const getExpensiveControlsByUser = () => {
  const config = {
    headers: {
      Authorization: userService.getToken()
    }
  }

  const request = axios.get(`${API_BASE_URL}/expensiveControls/byUser`, config)

  return request.then((response) => response.data)
}

export default { getExpensiveControlsByUser }
