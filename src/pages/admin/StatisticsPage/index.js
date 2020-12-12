import React from 'react'

// import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { StatisticTable } from 'components'

const propTypes = {}
const defaultProps = {}

function StatisticsPage() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.tableWrapper}>
        <StatisticTable />
      </div>
    </div>
  )
}

StatisticsPage.propTypes = propTypes
StatisticsPage.defaultProps = defaultProps
export default StatisticsPage

// styles
const useStyles = makeStyles((theme) => ({
  container: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  tableWrapper: {},
}))
