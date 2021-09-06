import React, { useEffect, useReducer } from 'react'
import { useLocation } from 'wouter'
import userService from 'LoginPage/services/user'
import { INITIAL_STATE } from 'commons/constants/global'
import { reducer } from 'commons/reducers/global'
import { loginSuccessAction } from 'commons/actions/global'
import { LOCAL_STORAGE_USER_DATA } from 'commons/constants'

const Context = React.createContext(INITIAL_STATE)

export function GlobalContextProvider({ children }) {
  const [location, setLocation] = useLocation()
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  useEffect(() => {
    const loggedUserJSON = window.sessionStorage.getItem(
      LOCAL_STORAGE_USER_DATA
    )

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)

      loginSuccessAction(user, dispatch)

      if (location === '/login') {
        setLocation('/')
      }
    } else {
      if (location !== '/login') {
        setLocation('/login')
      }
    }
  }, [])

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export default Context
