import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { SignUpForm } from 'components/forms'

const propTypes = {}
const defaultProps = {}

function SignUpPage(props) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom align="center">
            Регистрация
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <SignUpForm />
        </Grid>

        <Grid
          item
          xs={12}
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Typography variant="subtitle1">
            <Link to="/auth/sign_in">Уже есть аккаунт?</Link>
          </Typography>
        </Grid>
      </Grid>
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
