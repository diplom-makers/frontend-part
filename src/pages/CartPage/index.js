import React from 'react'

import { Typography, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { pipe, map, reduce, add } from 'ramda'
import { Link } from 'react-router-dom'

import { TourBlock, PageTitle } from 'components'
import { SubmitButton, FormInput } from 'components/forms/adapters'
import { OFFERS_PATH, OFFER_PATH } from 'constants/routes'
import { getInOr } from 'utils/ramda'
import { addQeryParams, getPath } from 'utils/route'

const propTypes = {}
const defaultProps = {}

const OFFERS = [
  {
    key: 0,
    title: 'AMAR SINA',
    raiting: 4,
    price: 45000,
    departDate: '20.02',
    arrivalDate: '25.02',
    description: '5 ночей | 2-x местный номер',
    type: 'тур на зимние каникулы',
    discount: 29,
    arrivalPount: 'Египет, Хургада',
    discountPrecent: 12,
    coverImg:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/dd/05/7d/steigenberger-al-dau.jpg?w=400&h=300&s=1',
    count: 1,
  },
  {
    key: 1,
    title: 'AMARA SINSA LOKA',
    raiting: 2,
    price: 25500,
    departDate: '21.02',
    arrivalDate: '26.02',
    description: '5 ночей | 3-x местный номер',
    type: 'тур на зимнии каникулы',
    discount: 29,
    arrivalPount: 'Египет, Полта',
    discountPrecent: 12,
    coverImg: 'https://arttour.ru/images/country_logo/afrika/zimbabwe.jpg',
    count: 1,
  },
  {
    key: 1,
    title: 'POPUGI HIKO',
    raiting: 3,
    price: 21500,
    departDate: '21.02',
    arrivalDate: '26.02',
    description: '5 ночей | 3-x местный номер',
    type: 'тур на зимнии каникулы',
    discount: 29,
    arrivalPount: 'Египет, Вцев',
    discountPrecent: 12,
    coverImg:
      'https://static.tonkosti.ru/images/2/25/%D0%96%D0%B8%D1%82%D0%B5%D0%BB%D0%B8_%D0%97%D0%B8%D0%BC%D0%B1%D0%B0%D0%B1%D0%B2%D0%B5.jpg',
    count: 1,
  },
]

const getTotal = pipe(map(getInOr(0, 'price')), reduce(add, 0))

function CartPage(props) {
  const classes = useStyles()

  const renderOfferCard = (offer) => (
    <div className={classes.tourContainer}>
      <TourBlock {...offer} />
    </div>
  )

  const renderOfferCards = map(renderOfferCard)

  return (
    <div className={classes.container}>
      <PageTitle>
        <Button variant="contained" color="primary">
          Сделать заказ
        </Button>
      </PageTitle>

      {/* <div className={classes.blockWrapper}>
        <Grid container spacing={2} className={classes.filterContainer}>
          <Grid item xs={12} sm={5}>
            <FormInput
              label="Точка назначения"
              name="arrivalPoint"
              defaultValue="Египет"
            />
          </Grid>

          <Grid item xs={6} sm={3}>
            <FormInput label="Дата" name="Date" defaultValue="20.02 - 01.03" />
          </Grid>

          <Grid item xs={6} sm={2}>
            <FormInput
              label="Кол-во персон"
              name="personCount"
              defaultValue="2 взрослых"
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <Button
              color="primary"
              variant="contained"
              style={{ width: '100%' }}
            >
              Найти
            </Button>
          </Grid>
        </Grid>
      </div> */}

      <div className={classes.offersCardContaner}>
        {renderOfferCards(OFFERS)}
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
  },
  offerCardWrapper: {
    // paddingLeft: theme.spacing(1),
    // paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    color: 'currentcolor',
    textDecoration: 'none',
  },
  tourContainer: {
    marginBottom: theme.spacing(2),
  },
  blockWrapper: {
    marginBottom: theme.spacing(3),
  },

  filterContainer: {
    paddingRight: theme.spacing(1.5),
    paddingLeft: theme.spacing(1.5),
    backgroundColor: theme.palette.grey[100],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    width: '100%',
    margin: 0,
  },
}))
