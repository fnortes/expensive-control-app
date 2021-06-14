import { ACTIONS } from 'commons/constants/global'

export const startLoadingAction = (dispatch) => {
  dispatch({
    type: ACTIONS.START_LOADING
  })
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
