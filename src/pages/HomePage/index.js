import React from 'react'

import { Container, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AndroidIcon from '@material-ui/icons/Android'
import AppleIcon from '@material-ui/icons/Apple'
import BlurLinearIcon from '@material-ui/icons/BlurLinear'
import SearchIcon from '@material-ui/icons/Search'
import { map } from 'ramda'

import { CategoryBlock, OffersBlock, OfferBlock, OfferCard } from 'components'

const defaultProps = {}

const CATEGORIES = [
  {
    icon: SearchIcon,
    title: 'Детективы',
    key: 1,
  },
  {
    icon: AppleIcon,
    title: 'IOS литература',
    key: 2,
  },
  {
    icon: AndroidIcon,
    title: 'Android литература',
    key: 3,
  },
  {
    icon: BlurLinearIcon,
    title: 'Фантастика',
    key: 4,
  },
]

const OFFERS = [
  {
    coverImg:
      'https://cdn.book24.ru/v2/ITD000000001114512/COVER/cover1__w220.jpg',
    price: 496,
    name: 'Книга 1',
    discountPrecent: 12,
    key: 1,
  },
  {
    price: 496,
    discountPrecent: 12,
    name: 'Книга 2',
    key: 5,
  },
  {
    coverImg:
      'https://cdn.book24.ru/v2/ITD000000000879184/COVER/cover1__w220.jpg',
    price: 496,
    name: 'Книга 3',
    key: 2,
  },
  {
    coverImg:
      'https://cdn.book24.ru/v2/ITD000000000264284/COVER/cover1__w220.jpg',
    price: 496,
    discountPrecent: 12,
    name: 'Книга 4',
    key: 3,
  },
  {
    coverImg:
      'https://cdn.book24.ru/v2/ITD000000000817489/COVER/cover1__w220.jpg',
    price: 496,
    discountPrecent: 12,
    name: 'Книга 5',
    key: 4,
  },
]

function HomePage() {
  const classes = useStyles()

  const renderCategory = (category) => (
    <div className={classes.categoryWrapper} key={category.key}>
      <CategoryBlock icon={category.icon}>{category.title}</CategoryBlock>
    </div>
  )

  const renderOffer = (offer) => (
    <div className={classes.offerWrapper} key={offer.key}>
      <OfferBlock {...offer} />
    </div>
  )

  const renderOfferCard = (offer) => (
    <div className={classes.offerCardWrapper} key={offer.key}>
      <OfferCard {...offer} />
    </div>
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
  },
  offerWrapper: {
    paddingRight: theme.spacing(2),
  },
  offerCardWrapper: {
    // paddingLeft: theme.spacing(1),
    // paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  offersCardContaner: {
    // paddingLeft: theme.spacing(3),
    // paddingRight: theme.spacing(3),
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',

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
