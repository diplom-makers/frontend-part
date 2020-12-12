import React, { useState } from 'react'

import { Container, Hidden, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { partial, pipe } from 'ramda'

import { AppBar, Copyright, Drawer as ResponseDrawer } from 'components'

import withTheme from '../withTheme'

const withAdminLayout = (WrappedComponent) => (props) => {
  const [mobileDrawerIsOpen, setMobileDrawerOpen] = useState(false)

  const closeMobileDrawer = partial(setMobileDrawerOpen, [false])
  const showMobileDrawer = partial(setMobileDrawerOpen, [true])

  const classes = useStyles()
  const container =
    window !== undefined ? () => window.document.body : undefined

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <ResponseDrawer
            container={container}
            variant="temporary"
            open={mobileDrawerIsOpen}
            onClose={closeMobileDrawer}
            ModalProps={{
              keepMounted: true,
            }}
          />
        </Hidden>

        <Hidden xsDown implementation="css">
          <ResponseDrawer open variant="permanent" />
        </Hidden>
      </nav>

      <div className={classes.page}>
        <AppBar onClickMenuButton={showMobileDrawer}>
          <Typography variant="subtitle">154 000р.</Typography>
        </AppBar>

        <main className={classes.content}>
          <WrappedComponent {...props} />
        </main>

        <Copyright />
      </div>
    </div>
  )
}

export default pipe(withAdminLayout, withTheme)

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
    height: '100%',
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  page: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${ResponseDrawer.drawerWidth}px)`,
      marginLeft: ResponseDrawer.drawerWidth,
    },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: ResponseDrawer.drawerWidth,
      flexShrink: 0,
    },
  },
}))
