import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { withLayout } from 'hocs'
import { HomePage, ProfilePage } from 'pages'

// import { Typography } from '@material-ui/core'

const defaultProps = {}

function MainRouter(props) {
  const ProfilePageWithLayout = withLayout(ProfilePage)
  const HomePageWithLayout = withLayout(HomePage)

  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <ProfilePageWithLayout />
        </Route>
        <Route path="/">
          <HomePageWithLayout />
        </Route>
      </Switch>
    </Router>
  )
}

MainRouter.defaultProps = defaultProps
export default MainRouter
