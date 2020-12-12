import React from 'react'

// import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { NewOfferForm } from 'components/forms'

const propTypes = {}
const defaultProps = {}

function OfferFormPage() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <NewOfferForm />
    </div>
  )
}

OfferFormPage.propTypes = propTypes
OfferFormPage.defaultProps = defaultProps
export default OfferFormPage

// styles
const useStyles = makeStyles({
  container: {},
})
