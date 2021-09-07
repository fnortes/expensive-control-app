import { ACTIONS } from 'commons/constants/global'

export const startLoadingAction = (dispatch) => {
  dispatch({ type: ACTIONS.START_LOADING })
}

export const endLoadingAction = (error, dispatch) => {
  dispatch({
    type: ACTIONS.END_LOADING,
    payload: error
  })
}

export const loginSuccessAction = (userData, dispatch) => {
  dispatch({
    type: ACTIONS.LOGIN_SUCCESS,
    payload: userData
  })
}

export const loginFailureAction = (error, dispatch) => {
  dispatch({
    type: ACTIONS.LOGIN_FAILURE,
    payload: error
  })
}

export const toggleMenuAction = (payload, dispatch) => {
  dispatch({
    type: ACTIONS.TOGGLE_MENU,
    payload
  })
}

export const setUserMenuAnchorElAction = (payload, dispatch) => {
  dispatch({
    type: ACTIONS.UPDATE_USER_MENU_ANCHOR_EL,
    payload
  })
}

export const setUserMenuMobileAnchorElAction = (payload, dispatch) => {
  dispatch({
    type: ACTIONS.UPDATE_USER_MENU_MOBILE_ANCHOR_EL,
    payload
  })
}

export const setSelectedExpensiveControlAction = (payload, dispatch) => {
  dispatch({
    type: ACTIONS.UPDATE_SELECTED_EXPENSIVE_CONTROL_INDEX,
    payload
  })
}

export const setSelectedExpensiveControlAnchorElAction = (
  payload,
  dispatch
) => {
  dispatch({
    type: ACTIONS.UPDATE_SELECTED_EXPENSIVE_CONTROL_ANCHOR_EL,
    payload
  })
}

export const expensiveControlsByUserSuccessAction = (
  expensivesControl,
  dispatch
) => {
  dispatch({
    type: ACTIONS.EXPENSIVE_CONTROLS_BY_USER_SUCCESS,
    payload: expensivesControl
  })
}

export const expensiveControlsByUserFailureAction = (error, dispatch) => {
  dispatch({
    type: ACTIONS.EXPENSIVE_CONTROLS_BY_USER_FAILURE,
    payload: error
  })
}

export const logoutSuccessAction = (dispatch) => {
  dispatch({ type: ACTIONS.LOGOUT_SUCCESS })
}
