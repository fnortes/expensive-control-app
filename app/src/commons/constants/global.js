export const INITIAL_STATE = {
  user: null,
  loading: false,
  error: ''
}

export const ACTIONS = {
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE'
}