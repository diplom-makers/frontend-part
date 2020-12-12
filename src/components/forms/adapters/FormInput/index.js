import React, { forwardRef } from 'react'

import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { tap, pipe } from 'ramda'
// import { Typography } from '@material-ui/core'

import { isDefined, getIn } from 'utils/ramda'

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.any,
}
const defaultProps = {
  errors: null,
  isRequired: false,
}

function FormInput({ errors, name, label, isRequired, ...rest }, ref) {
  const classes = useStyles()

  return (
    <TextField
      className={classes.textField}
      variant="outlined"
      label={`${label} ${isRequired ? '*' : ''}`}
      name={name}
      inputRef={ref}
      error={pipe(getIn(name), isDefined)(errors)}
      helperText={getIn([name, 'message'], errors)}
      InputLabelProps={{ className: classes.label }}
    />
  )
}

FormInput.propTypes = propTypes
FormInput.defaultProps = defaultProps
export default forwardRef(FormInput)

// styles
const useStyles = makeStyles({
  textField: {
    width: '100%',
  },
  label: {
    whiteSpace: 'nowrap',
  },
})
