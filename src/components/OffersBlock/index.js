import React from 'react'

import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { isDefined } from 'utils/ramda'

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

const defaultProps = {
  title: null,
}

function OffersBlock({ title, children }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {isDefined(title) && (
        <Typography className={classes.title} variant="h6">
          {title}
        </Typography>
      )}
      <div className={classes.content}>{children}</div>
    </div>
  )
}

OffersBlock.propTypes = propTypes
OffersBlock.defaultProps = defaultProps
export default OffersBlock

// styles
const useStyles = makeStyles((theme) => ({
  container: {},
  title: {
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  content: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    display: 'flex',
    alignItems: 'stretch',
    overflowX: 'auto',

    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}))
