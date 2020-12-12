import React from 'react'

// import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const propTypes = {}
const defaultProps = {}

function OfferPage() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <span>OfferPage</span>
    </div>
  )
}

OfferPage.propTypes = propTypes
OfferPage.defaultProps = defaultProps
export default OfferPage

// styles
const useStyles = makeStyles({
  container: {},
})
