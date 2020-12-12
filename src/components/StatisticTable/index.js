// import { Typography } from '@material-ui/core'

import React from 'react'

import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import PropTypes from 'prop-types'
import { map } from 'ramda'

const propTypes = {}
const defaultProps = {}

const rowSname = {
  name: 'Наименование',
  total: 'Доступное количество',
  sold: 'Продано',
  price: 'Цена',
}

const rows = [
  { name: 'Книга 1', total: '140', sold: '25', price: '435р.' },
  { name: 'Книга 2', total: '320', sold: '95', price: '496р.' },
  { name: 'Книга 3', total: '190', sold: '15', price: '496р.' },
  { name: 'Книга 4', total: '1270', sold: '315', price: '396р.' },
]

function StatisticTable(props) {
  const classes = useStyles()

  const renderTableRow = (rowData) => (
    <TableRow>
      <TableCell>{rowData.name}</TableCell>
      <TableCell align="right">{rowData.total}</TableCell>
      <TableCell align="right">{rowData.sold}</TableCell>
      <TableCell align="right">{rowData.price}</TableCell>
    </TableRow>
  )

  const renderTableRows = map(renderTableRow)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>{renderTableRow(rowSname)}</TableHead>
        <TableBody>{renderTableRows(rows)}</TableBody>
      </Table>
    </TableContainer>
  )
}

StatisticTable.propTypes = propTypes
StatisticTable.defaultProps = defaultProps
export default StatisticTable

// styles
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})
