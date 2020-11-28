import React from 'react'

// import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { SignInForm } from 'components/forms'

const propTypes = {}
const defaultProps = {}

function SignInPage(props) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <span>SignInPage</span>

      <SignInForm />
    </div>
  )
}

SignInPage.propTypes = propTypes
SignInPage.defaultProps = defaultProps
export default SignInPage

// styles
const useStyles = makeStyles({
  container: {},
})
