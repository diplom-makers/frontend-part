import React from 'react'

// import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const defaultProps = {}

function HomePage() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <span>Home Page</span>
    </div>
  )
}

HomePage.defaultProps = defaultProps
export default HomePage

// styles
const useStyles = makeStyles({
  container: {},
})
