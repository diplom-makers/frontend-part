import React from 'react'

// import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom'

const propTypes = {
  children: PropTypes.node.isRequired,
}
const defaultProps = {}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        false ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth/sign_up',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = propTypes
PrivateRoute.defaultProps = defaultProps
export default PrivateRoute
