import React, { useState } from 'react'

import { IconButton, Container, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Menu as MenuIcon } from '@material-ui/icons'
import { partial, pipe } from 'ramda'

import { Copyright, Drawer as ResponseDrawer } from 'components'

import withTheme from '../withTheme'

const withAuthLayout = (WrappedComponent) => (props) => {
  const [mobileDrawerIsOpen, setMobileDrawerOpen] = useState(false)

  const closeMobileDrawer = partial(setMobileDrawerOpen, [false])
  const showMobileDrawer = partial(setMobileDrawerOpen, [true])

  const classes = useStyles()
  const container =
    window !== undefined ? () => window.document.body : undefined

  return (
    <div className={classes.root}>
      <div className={classes.appBar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={showMobileDrawer}
        >
          <MenuIcon />
        </IconButton>
      </div>

      <Container maxWidth="sm" className={classes.container}>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <ResponseDrawer
            container={container}
            variant="temporary"
            open={mobileDrawerIsOpen}
            onClose={closeMobileDrawer}
            ModalProps={{
              keepMounted: true,
            }}
          />
        </nav>

        <div className={classes.page}>
          <main className={classes.content}>
            <WrappedComponent {...props} />
          </main>

          <Copyright />
        </div>
      </Container>
    </div>
  )
}

export default pipe(withAuthLayout, withTheme)

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    height: '100%',
  },
  appBar: {
    paddingLeft: '20px',
    paddingTop: '5px',
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    // padding: '25px',
    // backgroundColor: '#FBF9FF',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: ResponseDrawer.drawerWidth,
      flexShrink: 0,
    },
  },
}))
