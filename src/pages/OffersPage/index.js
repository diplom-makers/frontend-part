import React from 'react'

import { Typography, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Autocomplete from '@material-ui/lab/Autocomplete'
import PropTypes from 'prop-types'
import { map, length } from 'ramda'
import { Link } from 'react-router-dom'

import { OfferCard, PageTitle } from 'components'
import { OFFERS_PATH, OFFER_PATH } from 'constants/routes'
import { addQeryParams, getPath } from 'utils/route'

const propTypes = {}
const defaultProps = {}

const OFFERS = [
  {
    coverImg:
      'https://cdn.book24.ru/v2/ITD000000001114512/COVER/cover1__w220.jpg',
    price: 496,
    name: 'Книга 1',
    discountPrecent: 12,
    id: 1,
  },
  {
    price: 496,
    discountPrecent: 12,
    name: 'Книга 2',
    id: 5,
  },
  {
    coverImg:
      'https://cdn.book24.ru/v2/ITD000000000879184/COVER/cover1__w220.jpg',
    price: 496,
    name: 'Книга 3',
    id: 2,
  },
  {
    coverImg:
      'https://cdn.book24.ru/v2/ITD000000000264284/COVER/cover1__w220.jpg',
    price: 496,
    discountPrecent: 12,
    name: 'Книга 4',
    id: 3,
  },
  {
    coverImg:
      'https://cdn.book24.ru/v2/ITD000000000817489/COVER/cover1__w220.jpg',
    price: 496,
    discountPrecent: 12,
    name: 'Книга 5',
    id: 4,
  },
]

const CATEGORIES = [
  {
    title: 'Детективы',
    id: 1,
  },
  {
    title: 'IOS литература',
    id: 2,
  },
  {
    title: 'Android литература',
    id: 3,
  },
  {
    title: 'Фантастика',
    id: 4,
  },
]

const AUTHORS = [
  {
    title: 'Полтавцев 1',
    id: 1,
  },
  {
    title: 'Полтавцев 2',
    id: 2,
  },
  {
    title: 'Полтавцев 3',
    id: 3,
  },
  {
    title: 'Полтавцев 4',
    id: 4,
  },
]

function OffersPage(props) {
  const classes = useStyles()

  const renderOfferCard = (offer) => (
    <Link
      to={getPath(OFFER_PATH, { offerId: offer.id })}
      className={classes.offerCardWrapper}
      key={offer.id}
    >
      <OfferCard {...offer} />
    </Link>
  )

  const renderOfferCards = map(renderOfferCard)

  return (
    <div className={classes.container}>
      <PageTitle />

      <Autocomplete
        multiple
        options={CATEGORIES}
        getOptionLabel={(option) => option.title}
        defaultValue={[CATEGORIES[0]]}
        renderInput={(params) => (
          <TextField {...params} variant="standard" label="Категории" />
        )}
      />

      <Typography
        variant="subtitle"
        component="div"
        className={classes.results}
      >
        Результатов: {length(OFFERS)}
      </Typography>
      <div className={classes.offersCardContaner}>
        {renderOfferCards(OFFERS)}
      </div>
    </div>
  )
}

OffersPage.propTypes = propTypes
OffersPage.defaultProps = defaultProps
export default OffersPage

// styles
const useStyles = makeStyles((theme) => ({
  results: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  container: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
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
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridColumnGap: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
}))
