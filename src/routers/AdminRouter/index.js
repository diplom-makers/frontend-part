import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ADMIN_ROUTES } from 'constants/routes'
import { withAdminLayout } from 'hocs'
import OfferFormPage from 'pages/admin/OfferFormPage'
import StatisticsPage from 'pages/admin/StatisticsPage'

import PrivateRoute from '../shared/PrivateRoute'

// import { Typography } from '@material-ui/core'

const defaultProps = {}

function AdminRouter(props) {
  return (
    <Switch>
      <Route path={ADMIN_ROUTES.OFFERS_PATH}>
        <StatisticsPage />
      </Route>

      <Route path={ADMIN_ROUTES.NEW_OFFER_PATH}>
        <OfferFormPage />
      </Route>

      <Route path={ADMIN_ROUTES.ROOT_PATH}>
        <StatisticsPage />
      </Route>
    </Switch>
  )
}

AdminRouter.defaultProps = defaultProps
export default withAdminLayout(AdminRouter)
