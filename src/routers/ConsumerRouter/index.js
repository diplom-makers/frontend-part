import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { withLayout } from 'hocs'
import { HomePage, ProfilePage } from 'pages'

import PrivateRoute from '../shared/PrivateRoute'

// import { Typography } from '@material-ui/core'

const defaultProps = {}

function ConsumerRouter(props) {
  return (
    <Switch>
      <PrivateRoute path="/profile">
        <ProfilePage />
      </PrivateRoute>

      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  )
}

ConsumerRouter.defaultProps = defaultProps
export default withLayout(ConsumerRouter)
