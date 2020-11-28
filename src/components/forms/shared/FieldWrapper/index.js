import React, { cloneElement } from 'react'

// import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.element.isRequired,
}
const defaultProps = {}

function FieldWrapper({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {cloneElement(children, { className: classes.field })}
    </div>
  )
}

FieldWrapper.propTypes = propTypes
FieldWrapper.defaultProps = defaultProps
export default FieldWrapper

// styles
const useStyles = makeStyles({
  container: {
    marginBottom: '25px',
    marginRight: '5px',
    marginLeft: '5px',
    width: '100%',
  },
  field: {
    flexGrow: 1,
    width: '100%',
  },
})
