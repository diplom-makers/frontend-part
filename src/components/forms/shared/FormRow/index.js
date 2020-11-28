import React, { cloneElement } from 'react'

// import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.element.isRequired,
}
const defaultProps = {}

function FormRow({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {cloneElement(children, { className: classes.field })}
    </div>
  )
}

FormRow.propTypes = propTypes
FormRow.defaultProps = defaultProps
export default FormRow

// styles
const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
})
