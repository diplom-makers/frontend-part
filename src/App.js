import 'fontsource-roboto'

import React from 'react'

import { withLayout } from 'hocs'
import MainRouter from 'routers/MainRouter'

// import withLayout from './hocs/withLayout'

function App() {
  return <MainRouter />
}

export default withLayout(App)
