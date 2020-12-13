import React from 'react'

import { Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AndroidIcon from '@material-ui/icons/Android'
import AppleIcon from '@material-ui/icons/Apple'
import BlurLinearIcon from '@material-ui/icons/BlurLinear'
import SearchIcon from '@material-ui/icons/Search'
import { map } from 'ramda'
import { Link } from 'react-router-dom'

import {
  CategoryBlock,
  OffersBlock,
  OfferBlock,
  OfferCard,
  TourBlock,
} from 'components'
import { FormInput, SubmitButton } from 'components/forms/adapters'
import { OFFERS_PATH, OFFER_PATH } from 'constants/routes'
import { addQeryParams, getPath } from 'utils/route'

const defaultProps = {}

const FLIGHTS = [
  {
    title: 'Российские курорты',
    id: 4,
  },
  {
    title: 'Египет',
    id: 1,
  },
  {
    title: 'Зимбабве',
    id: 2,
  },
  {
    title: 'Кипр',
    id: 3,
  },
  {
    title: 'Тайланд',
    id: 3,
  },
]

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
  },
]

function HomePage() {
  const classes = useStyles()

  const renderCategory = (category) => (
    <Link
      to={addQeryParams(OFFERS_PATH, { category: category.id })}
      className={classes.categoryWrapper}
      key={category.id}
    >
      <CategoryBlock icon={category.icon}>{category.title}</CategoryBlock>
    </Link>
  )

  const renderOfferCard = (offer) => (
    <div className={classes.tourContainer}>
      <TourBlock {...offer} />
    </div>
  )

  const renderCategories = map(renderCategory)
  const renderOfferCards = map(renderOfferCard)

  return (
    <div className={classes.container}>
      <div className={classes.blockWrapper}>
        <OffersBlock title="Популярное">
          {renderCategories(FLIGHTS)}
        </OffersBlock>
      </div>

      <div className={classes.blockWrapper}>
        <Grid container spacing={2} className={classes.filterContainer}>
          <Grid item xs={12} sm={5}>
            <FormInput label="Точка назначения" name="arrivalPoint" />
          </Grid>

          <Grid item xs={6} sm={3}>
            <FormInput label="Дата" name="Date" />
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
      </div>

      <div className={classes.blockWrapper}>
        <OffersBlock title="Все туры">
          <div style={{ width: '100%' }}>{renderOfferCards(OFFERS)}</div>
        </OffersBlock>
      </div>
    </div>
  )
}

HomePage.defaultProps = defaultProps
export default HomePage

// styles
const useStyles = makeStyles((theme) => ({
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
  container: {},
  categoryWrapper: {
    paddingRight: theme.spacing(1.5),
    color: 'currentcolor',
    textDecoration: 'none',
  },
  offerWrapper: {
    paddingRight: theme.spacing(2),
    color: 'currentcolor',
    textDecoration: 'none',
  },
  offerCardWrapper: {
    // paddingLeft: theme.spacing(1),
    // paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    color: 'currentcolor',
    textDecoration: 'none',
  },
  offersCardContaner: {
    // paddingLeft: theme.spacing(3),
    // paddingRight: theme.spacing(3),
  },
  title: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },

  blockWrapper: {
    marginBottom: theme.spacing(3),
  },

  tourContainer: {
    marginBottom: theme.spacing(2),
  },
}))
