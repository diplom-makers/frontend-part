import React from 'react'

import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { PageTitle } from 'components'
import { NewOfferForm } from 'components/forms'

const propTypes = {}
const defaultProps = {}

function OfferFormPage() {
  const classes = useStyles()

  return (
    <Container maxWidth="md" className={classes.container}>
      <div className={classes.container}>
        <PageTitle />
        {/* <Typography
          variant="h4"
          style={{ margin: '5px', marginBottom: '10px' }}
        >
          Новый рейс
        </Typography> */}
        <NewOfferForm />
      </div>
    </Container>
  )
}

OfferFormPage.propTypes = propTypes
OfferFormPage.defaultProps = defaultProps
export default OfferFormPage

// styles
const useStyles = makeStyles({
  container: {
    margin: 0,
  },
})
