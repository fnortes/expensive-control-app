export const INITIAL_STATE = {
  user: null,
  loading: false,
  error: '',
  header: {
    menu: {
      isOpen: false
    },
    userMenu: {
      main: {
        anchorEl: null,
        id: 'primary-search-account-menu'
      },
      mobile: {
        anchorEl: null,
        id: 'primary-search-account-menu-mobile'
      }
    },
    selectedExpensiveControl: {
      index: 1,
      anchorEl: null
    }
  }
}

export const ACTIONS = {
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',
  TOGGLE_MENU: 'TOGGLE_MENU',
  UPDATE_USER_MENU_ANCHOR_EL: 'UPDATE_USER_MENU_ANCHOR_EL',
  UPDATE_USER_MENU_MOBILE_ANCHOR_EL: 'UPDATE_USER_MENU_MOBILE_ANCHOR_EL',
  UPDATE_SELECTED_EXPENSIVE_CONTROL_INDEX:
    'UPDATE_SELECTED_EXPENSIVE_CONTROL_INDEX',
  UPDATE_SELECTED_EXPENSIVE_CONTROL_ANCHOR_EL:
    'UPDATE_SELECTED_EXPENSIVE_CONTROL_ANCHOR_EL'
}
