import React from 'react'

import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

function Copyright() {
  const classes = useStyles()

  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      className={classes.copyright}
    >
      Made for Poltavcev CW
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright

// styles
const useStyles = makeStyles(() => ({
  copyright: {
    padding: '10px',
  },
}))
