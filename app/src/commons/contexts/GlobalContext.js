import React, { useEffect, useReducer } from 'react'
import { useLocation } from 'wouter'
import { loginSuccessAction } from 'commons/actions/global'
import { INITIAL_STATE } from 'commons/constants/global'
import { reducer } from 'commons/reducers/global'
import { getUser } from 'commons/utils/sessionStorage'

const Context = React.createContext(INITIAL_STATE)

export function GlobalContextProvider({ children }) {
  const [location, setLocation] = useLocation()
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  useEffect(() => {
    const user = getUser()

    if (user) {
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
