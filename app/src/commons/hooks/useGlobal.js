import { useContext } from 'react'
import { useLocation } from 'wouter'
import Context from 'commons/contexts/GlobalContext'
import {
  endLoadingAction,
  loginFailureAction,
  loginSuccessAction,
  startLoadingAction
} from 'commons/actions/global'
import userService from 'LoginPage/services/user'
import { INITIAL_STATE } from 'commons/constants/global'
import {
  DELAY_TO_HIDE_ERROR_MESSAGE,
  LOCAL_STORAGE_USER_DATA
} from 'commons/constants'

export default function useGlobal() {
  const [, setLocation] = useLocation()
  const { state, dispatch } = useContext(Context)

  const startLoading = () => {
    startLoadingAction(dispatch)
  }

  const handleOnGetUserSuccess = (user) => {
    window.sessionStorage.setItem(LOCAL_STORAGE_USER_DATA, JSON.stringify(user))

    loginSuccessAction(user, dispatch)
    userService.setToken(user.token)

    setLocation('/')
  }
  const handleOnGetUserError = (errorMsg) => {
    loginFailureAction(errorMsg, dispatch)

    setTimeout(() => {
      endLoadingAction(INITIAL_STATE.error, dispatch)
    }, DELAY_TO_HIDE_ERROR_MESSAGE)
  }

  const login = async ({ email, password }) => {
    startLoading()

    try {
      const user = await userService.login({ email, password })

      handleOnGetUserSuccess(user)
    } catch (e) {
      handleOnGetUserError('Credenciales incorrectas')
    }
  }

  const createUser = async ({ email, password, name }) => {
    startLoading()

    try {
      const user = await userService.register({ email, password, name })

      handleOnGetUserSuccess(user)
    } catch (e) {
      handleOnGetUserError('No se ha podido registrar el usuario')
    }
  }

  return { state, startLoading, login, createUser }
}
