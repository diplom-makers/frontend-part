import React from 'react'

// import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const propTypes = {}
const defaultProps = {}

function OffersPage({}) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <span>OffersPage</span>
    </div>
  )
}

OffersPage.propTypes = propTypes
OffersPage.defaultProps = defaultProps
export default OffersPage

// styles
const useStyles = makeStyles({
  container: {},
})
