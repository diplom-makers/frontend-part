import React from 'react'

// import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { SignUpForm } from 'components/forms'

const propTypes = {}
const defaultProps = {}

function SignUpPage(props) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <span>SignUpPage</span>
      <SignUpForm />
    </div>
  )
}

SignUpPage.propTypes = propTypes
SignUpPage.defaultProps = defaultProps
export default SignUpPage

// styles
const useStyles = makeStyles({
  container: {},
})
