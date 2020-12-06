import React, { useState } from 'react'

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Divider,
  Drawer,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  Inbox as InboxIcon,
  Mail as MailIcon,
  ShoppingCart as ShoppingCartIcon,
  AmpStories as AmpStoriesIcon,
  AccountCircle as AccountCircleIcon,
  ExitToApp as ExitToAppIcon,
} from '@material-ui/icons'
import PropTypes from 'prop-types'
import { identity, pipe, tap, map } from 'ramda'
import { Link } from 'react-router-dom'

import { ROOT_PATH, PROFILE_PATH } from 'constants/routes'

const drawerWidth = 240

const MAIN_LINKS = [
  {
    key: 1,
    title: 'Главная',
    path: ROOT_PATH,
    authRequired: false,
    icon: AmpStoriesIcon,
  },
  {
    key: 1,
    title: 'Профиль',
    path: PROFILE_PATH,
    authRequired: true,
    icon: AccountCircleIcon,
  },
]

const SUB_LINKS = [
  {
    key: 1,
    title: 'Корзина',
    icon: ShoppingCartIcon,
    path: ROOT_PATH,
    authRequired: true,
  },
  {
    key: 1,
    title: 'Выйти',
    onClick: () => console.log('SIGN OUT'),
    authRequired: true,
    icon: ExitToAppIcon,
  },
]

const propTypes = {
  onClose: PropTypes.func,
}

const defaultProps = {
  onClose: identity,
}

function ResponsiveDrawer(props) {
  const classes = useStyles()

  const renderLinstItem = ({ icon: Icon, onClick = identity, ...item }) => (
    <Link
      to={item.path}
      className={classes.link}
      onClick={pipe(tap(onClick), props.onClose)}
      // onClick={props.onClose}
    >
      <ListItem>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    </Link>
  )

  const renderListItems = map(renderLinstItem)

  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      {...props}
    >
      <div className={classes.container}>
        <div>
          <div className={classes.toolbar} />
          <Divider />
          <List>{renderListItems(MAIN_LINKS)}</List>
          {/* <Divider /> */}
        </div>

        <div>
          <Divider />
          <List>{renderListItems(SUB_LINKS)}</List>
        </div>
      </div>
    </Drawer>
  )
}

ResponsiveDrawer.propTypes = propTypes
ResponsiveDrawer.defaultProps = defaultProps
ResponsiveDrawer.drawerWidth = drawerWidth
export default ResponsiveDrawer

// styles
const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },

  link: {
    textDecoration: 'none',
    color: theme.palette.grey[800],
  },
}))
