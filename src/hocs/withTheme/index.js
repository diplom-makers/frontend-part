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
