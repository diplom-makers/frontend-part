import React from 'react'

import { Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import Autocomplete from '@material-ui/lab/Autocomplete'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

import { FormInput, SubmitButton } from 'components/forms/adapters'

const propTypes = {}
const defaultProps = {}

const AUTHORS = [
  {
    title: 'Полтавцев 1',
    id: 1,
  },
  {
    title: 'Полтавцев 2',
    id: 2,
  },
  {
    title: 'Полтавцев 3',
    id: 3,
  },
  {
    title: 'Полтавцев 4',
    id: 4,
  },
]

const CATEGORIES = [
  {
    title: 'Детективы',
    id: 1,
  },
  {
    title: 'IOS литература',
    id: 2,
  },
  {
    title: 'Android литература',
    id: 3,
  },
  {
    title: 'Фантастика',
    id: 4,
  },
]

function NewOfferForm() {
  const classes = useStyles()
  const { register, handleSubmit, watch, ...restForm } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={4} className={classes.photoContainer}>
          <div className={classes.photo}>
            <PhotoCameraIcon fontSize="large" />
          </div>
        </Grid>

        <Grid item container xs={8} spacing={2}>
          <Grid item xs={12} sm={12}>
            <FormInput
              label="Название"
              name="password"
              ref={register}
              {...restForm}
            />
          </Grid>

          <Grid item xs={12} sm={8}>
            <Autocomplete
              options={CATEGORIES}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Категория" />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormInput
              label="Артикул"
              name="password"
              ref={register}
              {...restForm}
            />
          </Grid>

          <Grid item xs={12}>
            <Autocomplete
              multiple
              options={AUTHORS}
              getOptionLabel={(option) => option.title}
              defaultValue={[AUTHORS[0]]}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Авторы" />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <FormInput
              label="Описание"
              name="password"
              rows={4}
              multiline
              ref={register}
              {...restForm}
            />
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div>
            <SubmitButton />
          </div>
        </Grid>
      </Grid>
    </form>
  )
}

NewOfferForm.propTypes = propTypes
NewOfferForm.defaultProps = defaultProps
export default NewOfferForm

// styles
const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    margin: 'auto',
  },
  photo: {
    width: '250px',
    height: '350px',
    backgroundColor: theme.palette.grey[200],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    maxWidth: '500px',
  },
}))
