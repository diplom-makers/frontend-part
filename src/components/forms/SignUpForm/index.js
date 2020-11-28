import React from 'react'

// import { Typography } from '@material-ui/core'
import { yupResolver } from '@hookform/resolvers/yup'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

import { FormInput, SubmitButton } from 'components/forms/adapters'
import { signUpValidationSchema } from 'utils/validationSchemas'

const propTypes = {}
const defaultProps = {}

function SignUpForm(props) {
  const classes = useStyles()
  const { register, handleSubmit, watch, ...restForm } = useForm({
    resolver: yupResolver(signUpValidationSchema),
  })

  const onSubmit = (data) => console.log(data)

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormInput
              label="Email"
              name="email"
              ref={register}
              {...restForm}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormInput
              label="Пароль"
              name="password"
              ref={register}
              {...restForm}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormInput
              label="Подтверждение пароля"
              name="passwordConfirmation"
              ref={register}
              {...restForm}
            />
          </Grid>

          <Grid
            item
            xs={12}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <SubmitButton />
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

SignUpForm.propTypes = propTypes
SignUpForm.defaultProps = defaultProps
export default SignUpForm

// styles
const useStyles = makeStyles({
  container: {},
})
