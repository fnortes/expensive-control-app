import React, { Suspense } from 'react'
import { Route, Switch } from 'wouter'
import Spinner from 'commons/components/Spinner/Spinner'

const LazyHome = React.lazy(() => import('HomePage/HomePage'))
const LazyNotifications = React.lazy(() =>
  import('NotificationsPage/NotificationsPage')
)
const LazyLogin = React.lazy(() => import('LoginPage/LoginPage'))
const LazyError = React.lazy(() => import('ErrorPage/ErrorPage'))

export default function Routes() {
  return (
    <Suspense fallback={<Spinner loading />}>
      <Spinner />
      <Switch>
        <Route component={LazyHome} path="/" />
        <Route component={LazyNotifications} path="/notifications" />
        <Route component={LazyLogin} path="/login" />
        <Route component={LazyError} />
      </Switch>
    </Suspense>
  )
}
