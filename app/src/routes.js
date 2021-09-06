import React, { Suspense } from 'react'
import { Route, Switch } from 'wouter'
import Spinner from 'commons/components/Spinner'

// Load Home page in lazy mode.
const LazyHome = React.lazy(() => import('HomePage'))

// Load login page in lazy mode.
const LazyLogin = React.lazy(() => import('LoginPage'))

// Load error page in lazy mode.
const LazyError = React.lazy(() => import('ErrorPage'))

export default function Routes() {
  return (
    <Suspense fallback={<Spinner loading />}>
      <Spinner />
      <Switch>
        <Route component={LazyHome} path="/" />
        <Route component={LazyLogin} path="/login" />
        <Route component={LazyError} />
      </Switch>
    </Suspense>
  )
}
