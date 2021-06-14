import { ACTIONS, INITIAL_STATE } from 'commons/constants/global'

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.START_LOADING:
      return { ...state, loading: true, error: '' }
    case ACTIONS.END_LOADING:
      return { ...state, loading: false, error: action.payload }
    case ACTIONS.LOGIN_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: '' }
    case ACTIONS.LOGIN_FAILURE:
      return {
        ...state,
        user: INITIAL_STATE.user,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
