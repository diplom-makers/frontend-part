import React from 'react'

import { Hidden, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node,
}

const defaultProps = {
  children: null,
}

function Pagetitle({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div>
        <Hidden smUp implementation="css">
          <div className={classes.backActionContainer}>
            <ArrowBackIcon className={classes.arrow} />
            <Typography variant="button" display="block">
              Назад
            </Typography>
          </div>
        </Hidden>
      </div>
      {/* {children && <Typography variant="h3">{children}</Typography>} */}
      {children && children}
    </div>
  )
}

Pagetitle.propTypes = propTypes
Pagetitle.defaultProps = defaultProps
export default Pagetitle

// styles
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    marginBottom: theme.spacing(2),
    justifyContent: 'space-between',
  },
  backActionContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  arrow: {
    marginRight: theme.spacing(0.5),
  },
}))
