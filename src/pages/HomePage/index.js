import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AndroidIcon from '@material-ui/icons/Android'
import AppleIcon from '@material-ui/icons/Apple'
import BlurLinearIcon from '@material-ui/icons/BlurLinear'
import SearchIcon from '@material-ui/icons/Search'
import { map } from 'ramda'
import { Link } from 'react-router-dom'

import { CategoryBlock, OffersBlock, OfferBlock, OfferCard } from 'components'
import { OFFERS_PATH, OFFER_PATH } from 'constants/routes'
import { addQeryParams, getPath } from 'utils/route'

const defaultProps = {}

const CATEGORIES = [
  {
    icon: SearchIcon,
    title: 'Детективы',
    id: 1,
  },
  {
    icon: AppleIcon,
    title: 'IOS литература',
    id: 2,
  },
  {
    icon: AndroidIcon,
    title: 'Android литература',
    id: 3,
  },
  {
    icon: BlurLinearIcon,
    title: 'Фантастика',
    id: 4,
  },
]

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

  const renderOffer = (offer) => (
    <Link
      to={getPath(OFFER_PATH, { offerId: offer.id })}
      className={classes.offerWrapper}
      key={offer.id}
    >
      <OfferBlock {...offer} />
    </Link>
  )

  const renderOfferCard = (offer) => (
    <Link
      to={getPath(OFFER_PATH, { offerId: offer.id })}
      className={classes.offerCardWrapper}
      key={offer.id}
    >
      <OfferCard {...offer} />
    </Link>
  )

  const renderCategories = map(renderCategory)
  const renderOffers = map(renderOffer)
  const renderOfferCards = map(renderOfferCard)

  return (
    <div className={classes.container}>
      <div className={classes.blockWrapper}>
        <OffersBlock title="Популярные категории">
          {renderCategories(CATEGORIES)}
        </OffersBlock>
      </div>

      <div className={classes.blockWrapper}>
        <OffersBlock title="Новинки">{renderOffers(OFFERS)}</OffersBlock>
      </div>

      <div className={classes.blockWrapper}>
        <OffersBlock title="Товары">
          <div className={classes.offersCardContaner}>
            {renderOfferCards(OFFERS)}
          </div>
        </OffersBlock>
      </div>
    </div>
  )
}

HomePage.defaultProps = defaultProps
export default HomePage

// styles
const useStyles = makeStyles((theme) => ({
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
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridColumnGap: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  title: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },

  blockWrapper: {
    marginBottom: theme.spacing(3),
  },
}))
