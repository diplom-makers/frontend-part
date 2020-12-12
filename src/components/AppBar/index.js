// import './style.css'

import React from 'react'

import {
  Container,
  IconButton,
  Hidden,
  Toolbar,
  Typography,
} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'
import { identity } from 'ramda'

import SearchInput from './SearchInput'

const propTypes = {
  onClickMenuButton: PropTypes.func,
  children: PropTypes.node,
}

const defaultProps = {
  onClickMenuButton: identity,
  children: <SearchInput onChange={(v) => console.log('v', v)} />,
}

function ButtonAppBar({ onClickMenuButton, children, ...rest }) {
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
          Poltavcev
        </Typography>

        {children}
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
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}))
