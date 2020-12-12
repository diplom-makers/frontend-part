import React from 'react'

// import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { AUTH_SIGN_IN_PATH } from 'constants/routes'

const propTypes = {
  children: PropTypes.node.isRequired,
}
const defaultProps = {}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        // fixme auth logic
        true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: AUTH_SIGN_IN_PATH,
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
