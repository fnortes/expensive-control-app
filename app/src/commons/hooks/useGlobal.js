import { useContext } from 'react'
import { useLocation } from 'wouter'
import {
  endLoadingAction,
  expensiveControlsByUserFailureAction,
  expensiveControlsByUserSuccessAction,
  loginFailureAction,
  loginSuccessAction,
  logoutSuccessAction,
  setSelectedExpensiveControlAction,
  setSelectedExpensiveControlAnchorElAction,
  setUserMenuAnchorElAction,
  setUserMenuMobileAnchorElAction,
  startLoadingAction,
  toggleMenuAction
} from 'commons/actions/global'
import { DELAY_TO_HIDE_ERROR_MESSAGE } from 'commons/constants'
import { INITIAL_STATE } from 'commons/constants/global'
import Context from 'commons/contexts/GlobalContext'
import { requestGetExpensivesControlByUser } from 'commons/services/expensivesControl'
import { requestLogin, requestRegister } from 'commons/services/user'
import { deleteUser, saveUser } from 'commons/utils/sessionStorage'

export default function useGlobal() {
  const [, setLocation] = useLocation()
  const { state, dispatch } = useContext(Context)

  const startLoading = () => {
    startLoadingAction(dispatch)
  }

  const handleOnGetUserSuccess = (user) => {
    saveUser(user)
    loginSuccessAction(user, dispatch)
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
      const user = await requestLogin({ email, password })

      handleOnGetUserSuccess(user)
    } catch (e) {
      handleOnGetUserError('Credenciales incorrectas')
    }
  }

  const createUser = async ({ email, password, name }) => {
    startLoading()

    try {
      const user = await requestRegister({ email, password, name })

      handleOnGetUserSuccess(user)
    } catch (e) {
      handleOnGetUserError('No se ha podido registrar el usuario')
    }
  }

  const toggleMenu = (open = false) => {
    toggleMenuAction(open, dispatch)
  }

  const setUserMenuAnchorEl = (event) => {
    setUserMenuAnchorElAction(event.currentTarget, dispatch)
  }

  const cleanUserMenuAnchorEl = () => {
    setUserMenuAnchorElAction(null, dispatch)
  }

  const setUserMenuMobileAnchorEl = (event) => {
    setUserMenuMobileAnchorElAction(event.currentTarget, dispatch)
  }

  const cleanUserMenuMobileAnchorEl = () => {
    setUserMenuMobileAnchorElAction(null, dispatch)
  }

  const setSelectedExpensiveControl = (index) => {
    setSelectedExpensiveControlAction(index, dispatch)
  }

  const setSelectedExpensiveControlAnchorEl = (event) => {
    setSelectedExpensiveControlAnchorElAction(event.currentTarget, dispatch)
  }

  const cleanSelectedExpensiveControlAnchorEl = () => {
    setSelectedExpensiveControlAnchorElAction(null, dispatch)
  }

  const getAllExpensiveControlsByUser = async () => {
    startLoading()

    try {
      const expensivesControl = await requestGetExpensivesControlByUser()

      expensiveControlsByUserSuccessAction(expensivesControl, dispatch)
    } catch (e) {
      expensiveControlsByUserFailureAction(
        'No se han podido obtener los controles de gastos',
        dispatch
      )
    }
  }

  const logout = () => {
    deleteUser()
    logoutSuccessAction(dispatch)
    setLocation('/login')
  }

  return {
    state,
    startLoading,
    login,
    createUser,
    toggleMenu,
    setUserMenuAnchorEl,
    cleanUserMenuAnchorEl,
    setUserMenuMobileAnchorEl,
    cleanUserMenuMobileAnchorEl,
    setSelectedExpensiveControl,
    setSelectedExpensiveControlAnchorEl,
    cleanSelectedExpensiveControlAnchorEl,
    getAllExpensiveControlsByUser,
    logout
  }
}
