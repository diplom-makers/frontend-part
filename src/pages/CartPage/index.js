import React from 'react'

import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { length, pipe, map, reduce, add } from 'ramda'
import { Link } from 'react-router-dom'

import { OfferCartItem, PageTitle, Ticket } from 'components'
import { SubmitButton } from 'components/forms/adapters'
import { OFFERS_PATH, OFFER_PATH } from 'constants/routes'
import { getInOr } from 'utils/ramda'
import { addQeryParams, getPath } from 'utils/route'

const propTypes = {}
const defaultProps = {}

const flights = [
  {
    key: 0,
    departTime: '12:00',
    arrivalTime: '13:20',
    date: '13 декабря',
    departPoint: 'Ржев',
    arrivalPoint: 'Тверь',
    totalPlaces: '25',
    freePlaces: '12',
    category: 'M2',
    type: 'Заказной',
    price: '353',
    count: 1,
  },
  {
    key: 1,
    departTime: '13:50',
    arrivalTime: '16:00',
    date: '13 декабря',
    departPoint: 'Ржев',
    arrivalPoint: 'Тверь',
    totalPlaces: '15',
    freePlaces: '2',
    category: 'M2',
    type: 'Заказной',
    price: '706',
    count: 2,
  },
  {
    key: 2,
    departTime: '16:20',
    arrivalTime: '17:40',
    date: '13 декабря',
    departPoint: 'Ржев',
    arrivalPoint: 'Тверь',
    totalPlaces: '19',
    freePlaces: '6',
    category: 'M2',
    type: 'Заказной',
    price: '353',
    count: 1,
  },
]

const getTotal = pipe(map(getInOr(0, 'price')), reduce(add, 0))

function CartPage(props) {
  const classes = useStyles()

  const renderTicket = (ticket) => (
    <div className={classes.ticketWrapper}>
      <Ticket {...ticket} />
    </div>
  )

  const renderTickets = map(renderTicket)

  return (
    <div className={classes.container}>
      <PageTitle>
        <Button variant="contained" color="primary">
          Оплатить {length(flights)} билета
        </Button>
      </PageTitle>

      <div className={classes.blockWrapper}>{renderTickets(flights)}</div>

      <Typography variant="subtitle2" className={classes.totalText}>
        Сумма корзины: {getTotal(flights)} руб
      </Typography>
    </div>
  )
}

CartPage.propTypes = propTypes
CartPage.defaultProps = defaultProps
export default CartPage

// styles
const useStyles = makeStyles((theme) => ({
  totalText: {
    textAlign: 'right',
  },
  container: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  offersCardContaner: {
    // paddingLeft: theme.spacing(3),
    // paddingRight: theme.spacing(3),
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridColumnGap: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  offerCardWrapper: {
    // paddingLeft: theme.spacing(1),
    // paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    color: 'currentcolor',
    textDecoration: 'none',
  },
  blockWrapper: {
    marginBottom: theme.spacing(3),
  },

  ticketWrapper: {
    marginBottom: theme.spacing(2),
  },
}))
