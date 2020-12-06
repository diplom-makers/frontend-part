import React from 'react'

import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

export default (WrappedComponent) => (props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WrappedComponent {...props} />
    </ThemeProvider>
  )
}

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
        },
        body: {
          margin: '0',
          padding: '0',
          height: '100%',
        },
        '#root': {
          height: '100%',
        },
      },
    },
  },
})

theme.typography.h3 = {
  fontSize: '1.2rem',
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
}

theme.typography.h2 = {
  fontSize: '1.8rem',
  [theme.breakpoints.up('xs')]: {
    fontSize: '2.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.2rem',
  },
}
