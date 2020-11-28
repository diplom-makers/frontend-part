import React, { cloneElement } from 'react'

// import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.element.isRequired,
}
const defaultProps = {}

function FormCol({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {cloneElement(children, { className: classes.field })}
    </div>
  )
}

FormCol.propTypes = propTypes
FormCol.defaultProps = defaultProps
export default FormCol

// styles
const useStyles = makeStyles({
  container: {
    marginRight: '5px',
    marginLeft: '5px',
  },
  field: {
    flexGrow: 1,
    width: '100%',
  },
})
