import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { withLayout } from 'hocs'

import AuthRouter from '../AuthRouter'
import ConsumerRouter from '../ConsumerRouter'
// import PrivateRoute from '../shared/PrivateRoute'

// import { Typography } from '@material-ui/core'

const defaultProps = {}

function RootRouter(props) {
  console.log('props :>> ', props)
  return (
    <Router>
      <Switch>
        <Route path="/auth">
          <AuthRouter />
        </Route>

        <Route path="/">
          <ConsumerRouter />
        </Route>
      </Switch>
    </Router>
  )
}

RootRouter.defaultProps = defaultProps
export default RootRouter
