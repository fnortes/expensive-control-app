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
    case ACTIONS.TOGGLE_MENU: {
      const newState = { ...state }

      newState.header.menu.isOpen = action.payload

      return newState
    }
    case ACTIONS.UPDATE_USER_MENU_ANCHOR_EL: {
      const newState = { ...state }

      newState.header.userMenu.main.anchorEl = action.payload

      return newState
    }
    case ACTIONS.UPDATE_USER_MENU_MOBILE_ANCHOR_EL: {
      const newState = { ...state }

      newState.header.userMenu.mobile.anchorEl = action.payload

      return newState
    }
    case ACTIONS.UPDATE_SELECTED_EXPENSIVE_CONTROL_INDEX: {
      const newState = { ...state }

      newState.header.selectedExpensiveControl.index = action.payload
      newState.header.selectedExpensiveControl.anchorEl = null

      return newState
    }
    case ACTIONS.UPDATE_SELECTED_EXPENSIVE_CONTROL_ANCHOR_EL: {
      const newState = { ...state }

      newState.header.selectedExpensiveControl.anchorEl = action.payload

      return newState
    }
    case ACTIONS.EXPENSIVE_CONTROLS_BY_USER_SUCCESS:
      return {
        ...state,
        expensivesControl: action.payload,
        loading: false,
        error: ''
      }
    case ACTIONS.EXPENSIVE_CONTROLS_BY_USER_FAILURE:
      return {
        ...state,
        expensivesControl: INITIAL_STATE.expensivesControl,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
