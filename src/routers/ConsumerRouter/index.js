import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ROOT_PATH, PROFILE_PATH } from 'constants/routes'
import { withLayout } from 'hocs'
import { HomePage, ProfilePage } from 'pages'

import PrivateRoute from '../shared/PrivateRoute'

// import { Typography } from '@material-ui/core'

const defaultProps = {}

function ConsumerRouter(props) {
  return (
    <Switch>
      <PrivateRoute path={PROFILE_PATH}>
        <ProfilePage />
      </PrivateRoute>

      <Route path={ROOT_PATH}>
        <HomePage />
      </Route>
    </Switch>
  )
}

ConsumerRouter.defaultProps = defaultProps
export default withLayout(ConsumerRouter)
