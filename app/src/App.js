import React, { Suspense, useEffect, useState } from 'react'
import { Redirect, Route, Switch, useLocation } from 'wouter'
import { ThemeProvider } from 'styled-components'
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles'
import { customTheme } from 'styles'
import Spinner from 'commons/components/Spinner'

// Load Home page in lazy mode.
const LazyHome = React.lazy(() => import('pages/HomePage'))

// Load login page in lazy mode.
const LazyLogin = React.lazy(() => import('pages/LoginPage'))

// Load error page in lazy mode.
const LazyError = React.lazy(() => import('pages/ErrorPage'))

export default function App() {
  const [location] = useLocation()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      console.log(user)
      // noteService.setToken(user.token)
    }
  }, [])

  if (user === null && location !== '/login') return <Redirect to="/login" />
  if (user !== null && location === '/login') return <Redirect to="/" />

  return (
    <MuiThemeProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
        <StylesProvider injectFirst>
          <Suspense fallback={<Spinner loading />}>
            <Switch>
              <Route component={LazyHome} path="/" />
              <Route component={LazyLogin} path="/login" />
              <Route component={LazyError} />
            </Switch>
          </Suspense>
        </StylesProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}
