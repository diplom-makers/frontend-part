import React from 'react'

import { Redirect, Switch, Route, useRouteMatch } from 'react-router-dom'

import { withAuthLayout } from 'hocs'
import { SignInPage, SignUpPage } from 'pages/auth'

// import { Typography } from '@material-ui/core'

const defaultProps = {}

function AuthRouter(props) {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}/sign_up`}>
        <SignUpPage />
      </Route>

      <Route path={`${path}/sign_in`}>
        <SignInPage />
      </Route>

      <Route path={`${path}`}>
        <Redirect
          to={{
            pathname: '/auth/sign_in',
          }}
        />
      </Route>
    </Switch>
  )
}

AuthRouter.defaultProps = defaultProps
export default withAuthLayout(AuthRouter)
