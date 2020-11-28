// import './style.css'

import React from 'react'

import { IconButton, Hidden, Toolbar, Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'
import { identity } from 'ramda'

const propTypes = {
  onClickMenuButton: PropTypes.func,
}

const defaultProps = {
  onClickMenuButton: identity,
}

function ButtonAppBar({ onClickMenuButton, ...rest }) {
  const classes = useStyles()

  return (
    <AppBar position="static" {...rest} className="animated-gradient">
      <Toolbar>
        <Hidden smUp implementation="css">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onClickMenuButton}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Typography variant="h6" className={classes.title}>
          News
        </Typography>

        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

ButtonAppBar.propTypes = propTypes
ButtonAppBar.defaultProps = defaultProps
export default ButtonAppBar

// styles
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))
