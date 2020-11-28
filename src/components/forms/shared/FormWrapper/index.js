import React from 'react'

// import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.element.isRequired,
}
const defaultProps = {}

function FormWrapper({ children }) {
  const classes = useStyles()

  return <div className={classes.container}>{children}</div>
}

FormWrapper.propTypes = propTypes
FormWrapper.defaultProps = defaultProps
export default FormWrapper

// styles
const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})
