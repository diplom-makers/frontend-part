import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { SignInForm } from 'components/forms'

const propTypes = {}
const defaultProps = {}

function SignInPage(props) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom align="center">
            Авторизация
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <SignInForm />
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
            <Link to="/auth/sign_up">Еще нет аккаунта?</Link>
          </Typography>
        </Grid>
      </Grid>
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
