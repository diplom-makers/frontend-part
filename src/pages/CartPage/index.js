import React from 'react'

import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { pipe, map, reduce, add } from 'ramda'
import { Link } from 'react-router-dom'

import { OfferCartItem, PageTitle } from 'components'
import { SubmitButton } from 'components/forms/adapters'
import { OFFERS_PATH, OFFER_PATH } from 'constants/routes'
import { getInOr } from 'utils/ramda'
import { addQeryParams, getPath } from 'utils/route'

const propTypes = {}
const defaultProps = {}

const OFFERS = [
  {
    coverImg:
      'https://cdn.book24.ru/v2/ITD000000001114512/COVER/cover1__w220.jpg',
    price: 496,
    count: 20,
    name: 'Книга 1',
    discountPrecent: 12,
    id: 1,
  },
  {
    price: 496,
    discountPrecent: 12,
    name: 'Книга 2',
    count: 2,
    id: 5,
  },
  {
    coverImg:
      'https://cdn.book24.ru/v2/ITD000000000879184/COVER/cover1__w220.jpg',
    price: 496,
    name: 'Книга 3',
    count: 3,
    id: 2,
  },
]

const getTotal = pipe(map(getInOr(0, 'price')), reduce(add, 0))

function CartPage(props) {
  const classes = useStyles()

  const renderOfferCartItem = (offer) => (
    <Link
      to={getPath(OFFER_PATH, { offerId: offer.id })}
      className={classes.offerCardWrapper}
      key={offer.id}
    >
      <OfferCartItem {...offer} />
    </Link>
  )

  const renderOfferCartItems = map(renderOfferCartItem)

  return (
    <div className={classes.container}>
      <PageTitle>
        <Button variant="contained" color="primary">
          Сделать заказ
        </Button>
      </PageTitle>

      <div className={classes.offersCardContaner}>
        {renderOfferCartItems(OFFERS)}
      </div>

      <Typography variant="subtitle2" className={classes.totalText}>
        Сумма корзины: {getTotal(OFFERS)}руб.
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
}))
