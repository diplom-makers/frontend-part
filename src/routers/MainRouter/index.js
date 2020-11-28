import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { HomePage, ProfilePage } from 'pages'

import AuthRouter from '../AuthRouter'
import PrivateRoute from '../shared/PrivateRoute'

// import { Typography } from '@material-ui/core'

const defaultProps = {}

function MainRouter(props) {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/profile">
          <ProfilePage />
        </PrivateRoute>

        <Route path="/auth">
          <AuthRouter />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

MainRouter.defaultProps = defaultProps
export default MainRouter
