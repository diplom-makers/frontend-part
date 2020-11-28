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
import { Inbox as InboxIcon, Mail as MailIcon } from '@material-ui/icons/'

const drawerWidth = 240

function ResponsiveDrawer(props) {
  const classes = useStyles()

  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      {...props}
    >
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  )
}

ResponsiveDrawer.drawerWidth = drawerWidth
export default ResponsiveDrawer

// styles
const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}))
