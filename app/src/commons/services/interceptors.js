import { PUBLIC_API_URLS } from 'commons/constants'
import { getToken } from 'commons/utils/sessionStorage'

export const onFulfilledRequest = (req) => {
  if (PUBLIC_API_URLS.indexOf(req.url) === -1) {
    req.headers['Authorization'] = getToken()
  }

  console.log('Pasa por el request ok: ', req)

  return req
}

export const onRejectedRequest = (err) => {
  console.log('Pasa por el request ko: ', err)
  return Promise.reject(err)
}

export const onFulfilledResponse = (res) => {
  console.log('Pasa por el response ok: ', res)
  if (res.status === 201) {
    console.log('Posted Successfully')
  }
  return res
}

export const onRejectedResponse = (err) => {
  const {
    status,
    config: { url }
  } = err.response

  if (PUBLIC_API_URLS.indexOf(url) === -1) {
    if (status === 401) {
      window.location.href = '/login'
    }
  }

  console.log('Pasa por el response ko: ', err.response)
  return Promise.reject(err)
}
