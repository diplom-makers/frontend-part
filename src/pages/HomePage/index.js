import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AndroidIcon from '@material-ui/icons/Android'
import AppleIcon from '@material-ui/icons/Apple'
import BlurLinearIcon from '@material-ui/icons/BlurLinear'
import SearchIcon from '@material-ui/icons/Search'
import { map } from 'ramda'
import { Link } from 'react-router-dom'

import { Ticket } from 'components'
import { FormInput } from 'components/forms/adapters'
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
    price: '353',
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
  },
]

function HomePage() {
  const classes = useStyles()

  const renderTicket = (ticket) => (
    <div className={classes.ticketWrapper}>
      <Ticket {...ticket} />
    </div>
  )

  const renderTickets = map(renderTicket)

  return (
    <div className={classes.container}>
      <Grid container spacing={2} className={classes.filter}>
        <Grid item xs={8} sm={3}>
          <FormInput label="Дата" name="date" />
        </Grid>

        <Grid item xs={4} sm={3}>
          <FormInput label="Время" name="time" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormInput label="Город назначения" name="arrival point" />
        </Grid>
      </Grid>

      <div className={classes.blockWrapper}>{renderTickets(flights)}</div>
    </div>
  )
}

HomePage.defaultProps = defaultProps
export default HomePage

// styles
const useStyles = makeStyles((theme) => ({
  filter: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  container: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
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

  ticketWrapper: {
    marginBottom: theme.spacing(2),
  },
}))
