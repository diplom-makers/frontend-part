import React from 'react'

import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { isDefined } from 'utils/ramda'

const propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.node,
}
const defaultProps = {
  icon: null,
}

function CategoryBlock({ children, icon: Icon }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {isDefined(Icon) && (
        <div className={classes.iconContainer}>
          <Icon />
        </div>
      )}
      <Typography className={classes.title} variant="subtitle1">
        {children}
      </Typography>
    </div>
  )
}

CategoryBlock.propTypes = propTypes
CategoryBlock.defaultProps = defaultProps
export default CategoryBlock

// styles
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.grey[300],
    padding: theme.spacing(2),
    borderRadius: '5px',

    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    opacity: 0.75,
    marginRight: theme.spacing(1),
  },
  title: {
    lineHeight: 1.2,
  },
}))
