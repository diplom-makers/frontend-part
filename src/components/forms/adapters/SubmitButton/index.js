import React from 'react'

// import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const propTypes = {
  label: PropTypes.string,
}
const defaultProps = {
  label: 'Сохранить',
}

function SubmitButton({ label }) {
  const classes = useStyles()

  return (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      size="large"
      className={classes.button}
    >
      {label}
    </Button>
  )
}

SubmitButton.propTypes = propTypes
SubmitButton.defaultProps = defaultProps
export default SubmitButton

// styles
const useStyles = makeStyles({
  button: {
    width: '100%',
    marginTop: '15px',
  },
})
