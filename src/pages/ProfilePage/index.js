import React from 'react'

// import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const defaultProps = {}

function ProfilePage() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <span>Profile Page</span>
    </div>
  )
}

ProfilePage.defaultProps = defaultProps
export default ProfilePage

// styles
const useStyles = makeStyles({
  container: {},
})
