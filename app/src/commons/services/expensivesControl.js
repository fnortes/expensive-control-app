import axios from 'axios'

export const requestGetExpensivesControlByUser = () =>
  axios.get(`/expensiveControls/byUser`).then((response) => response.data)
