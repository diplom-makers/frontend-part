import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { pipe, values, pick, join } from 'ramda'
import { useForm } from 'react-hook-form'

import { FormInput, SubmitButton } from 'components/forms/adapters'
import { signUpValidationSchema } from 'utils/validationSchemas'

const propTypes = {
  defaultValues: PropTypes.obj,
}

const defaultProps = {
  defaultValues: {},
}

const getFullName = pipe(pick(['lastName', 'firstName']), values, join(' '))
function ProfileForm({ defaultValues }) {
  const classes = useStyles()
  const { register, handleSubmit, watch, ...restForm } = useForm({
    resolver: yupResolver(signUpValidationSchema),
    defaultValues,
  })

  const onSubmit = (data) => console.log(data)

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.avatarContainer}>
              <Avatar className={classes.avatar} />

              <div className={classes.nameContainer}>
                <Typography variant="h3">
                  {getFullName(defaultValues)}
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid item xs={6}>
            <FormInput
              label="Имя"
              name="firstName"
              ref={register}
              {...restForm}
            />
          </Grid>

          <Grid item xs={6}>
            <FormInput
              label="Фамилия"
              name="lastName"
              ref={register}
              {...restForm}
            />
          </Grid>

          <Grid item xs={12}>
            <FormInput
              label="Email"
              name="email"
              ref={register}
              {...restForm}
            />
          </Grid>

          <Grid item xs={7}>
            <FormInput
              label="Серия и номер пасспорта"
              name="passportCode"
              ref={register}
              {...restForm}
            />
          </Grid>

          <Grid item xs={5}>
            <FormInput
              label="Дата выдачи"
              name="passportDate"
              ref={register}
              {...restForm}
            />
          </Grid>

          <Grid item xs={12}>
            <FormInput
              label="Адрес"
              name="address"
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

ProfileForm.propTypes = propTypes
ProfileForm.defaultProps = defaultProps
export default ProfileForm

// styles
const useStyles = makeStyles((theme) => ({
  container: {},
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nameContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(2),

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
    },
  },
}))
