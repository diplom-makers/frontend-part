import React, { useState } from 'react'

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Divider,
  Drawer,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  Inbox as InboxIcon,
  Mail as MailIcon,
  ShoppingCart as ShoppingCartIcon,
  AmpStories as AmpStoriesIcon,
  AccountCircle as AccountCircleIcon,
  ExitToApp as ExitToAppIcon,
  Equalizer as EqualizerIcon,
  AddBox as AddBoxIcon,
  ImportContacts as MenuBookIcon,
} from '@material-ui/icons'
import PropTypes from 'prop-types'
import { identity, pipe, tap, map } from 'ramda'
import { Link } from 'react-router-dom'

import {
  ROOT_PATH,
  PROFILE_PATH,
  CART_PATH,
  ADMIN_ROUTES,
} from 'constants/routes'

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
    key: 2,
    title: 'Профиль',
    path: PROFILE_PATH,
    authRequired: true,
    icon: AccountCircleIcon,
  },
  {
    key: 3,
    title: 'Статистика',
    path: ADMIN_ROUTES.OFFERS_PATH,
    authRequired: true,
    icon: EqualizerIcon,
  },
  {
    key: 4,
    title: 'Новый продукт',
    path: ADMIN_ROUTES.NEW_OFFER_PATH,
    authRequired: true,
    icon: AddBoxIcon,
  },
]

const SUB_LINKS = [
  {
    key: 10,
    title: 'Корзина',
    icon: ShoppingCartIcon,
    path: CART_PATH,
    authRequired: true,
  },
  {
    key: 11,
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
          <div className={classes.toolbar}>
            <div className={classes.logoContainer}>
              <MenuBookIcon fontSize="large" />
              <Typography variant="h5">STORYBOOK</Typography>
            </div>
          </div>
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

  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '15px',
  },
}))
