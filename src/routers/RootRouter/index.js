import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ROOT_PATH, AUTH_PATH, ADMIN_ROUTES } from 'constants/routes'
import { withLayout } from 'hocs'

import AdminRouter from '../AdminRouter'
import AuthRouter from '../AuthRouter'
import ConsumerRouter from '../ConsumerRouter'
// import PrivateRoute from '../shared/PrivateRoute'

// import { Typography } from '@material-ui/core'

const defaultProps = {}

function RootRouter(props) {
  return (
    <Router>
      <Switch>
        <Route path={ADMIN_ROUTES.ROOT_PATH}>
          <AdminRouter />
        </Route>

        <Route path={AUTH_PATH}>
          <AuthRouter />
        </Route>

        <Route path={ROOT_PATH}>
          <ConsumerRouter />
        </Route>
      </Switch>
    </Router>
  )
}

RootRouter.defaultProps = defaultProps
export default RootRouter
