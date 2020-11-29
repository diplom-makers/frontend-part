import React from 'react'

import { Redirect, Switch, Route } from 'react-router-dom'

import {
  AUTH_PATH,
  AUTH_SIGN_UP_PATH,
  AUTH_SIGN_IN_PATH,
} from 'constants/routes'
import { withAuthLayout } from 'hocs'
import { SignInPage, SignUpPage } from 'pages/auth'

// import { Typography } from '@material-ui/core'

const defaultProps = {}

function AuthRouter(props) {
  return (
    <Switch>
      <Route path={AUTH_SIGN_IN_PATH}>
        <SignInPage />
      </Route>

      <Route path={AUTH_SIGN_UP_PATH}>
        <SignUpPage />
      </Route>

      <Route path={AUTH_PATH}>
        <Redirect
          to={{
            pathname: AUTH_SIGN_IN_PATH,
          }}
        />
      </Route>
    </Switch>
  )
}

AuthRouter.defaultProps = defaultProps
export default withAuthLayout(AuthRouter)
