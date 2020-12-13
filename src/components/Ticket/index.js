/* eslint-disable quotes */
import React from 'react'

import { Hidden, Button, Typography, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import PropTypes from 'prop-types'

import { isDefined, isNotDefined } from 'utils/ramda'

const propTypes = {
  departTime: PropTypes.string.isRequired,
  arrivalTime: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  departPoint: PropTypes.string.isRequired,
  arrivalPoint: PropTypes.string.isRequired,
  totalPlaces: PropTypes.string.isRequired,
  freePlaces: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
}
const defaultProps = {}

function Ticket({
  departTime,
  arrivalTime,
  date,
  departPoint,
  totalPlaces,
  freePlaces,
  category,
  arrivalPoint,
  type,
  price,
  count,
}) {
  const classes = useStyles()

  const DesktopVersion = () => (
    <div className={classes.container}>
      <div className={classes.ticketItem}>
        <Typography variant="h6">{departTime}</Typography>
        <span>{date}</span>
        <Typography className={classes.point}>{departPoint}</Typography>
      </div>

      <div className={classes.ticketItem}>
        <Typography variant="h6">{arrivalTime}</Typography>
        <span>{date}</span>
        <Typography className={classes.point}>{arrivalPoint}</Typography>
      </div>

      <div className={classes.ticketItem}>
        <div className={classes.desc}>
          <Typography variant="subtitle" className={classes.type}>
            {type}
          </Typography>
          <Typography variant="subtitle" className={classes.accent}>
            {departPoint} - {arrivalPoint}
          </Typography>
        </div>

        <span>
          {`${totalPlaces} Мест Категория ТС "${category}", свободно: ${freePlaces}`}
        </span>
      </div>

      <div className={`${classes.ticketItem} ${classes.actions}`}>
        <Typography variant="subtitle" className={classes.price}>
          {price} руб
        </Typography>
        {isDefined(count) && (
          <span style={{ marginRight: '5px' }}>{count} шт.</span>
        )}
        {isNotDefined(count) && (
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            В корзину
          </Button>
        )}
      </div>
    </div>
  )

  const MobileVersion = () => (
    <div className={classes.mobileContainer}>
      <div className={classes.mobileTicketItem}>
        <div>
          <Typography variant="h6">{arrivalPoint}</Typography>

          <div>
            <Typography variant="h6">
              {departTime} - {arrivalTime}
            </Typography>
          </div>
        </div>

        <div>
          <div className={`${classes.ticketItem} ${classes.actions}`}>
            <Typography variant="subtitle" className={classes.price}>
              {price} pуб.
            </Typography>
          </div>
        </div>
      </div>

      <div className={classes.mobileTicketItem} style={{ marginTop: '5px' }}>
        <div className={classes.ticketItem}>
          <div className={classes.desc}>
            <Typography variant="subtitle" className={classes.type}>
              {type}
            </Typography>
            <Typography variant="subtitle" className={classes.accent}>
              {departPoint} - {arrivalPoint}
            </Typography>
          </div>

          <span>
            {`${totalPlaces} Мест Категория ТС "${category}", свободно: ${freePlaces}`}
          </span>
        </div>
      </div>

      <div
        className={classes.mobileTicketItem}
        style={{
          marginTop: '5px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        <div className={classes.mobileActions}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="small"
            className={classes.mobileButton}
          >
            Купить в 1 клик
          </Button>
          <IconButton
            size="small"
            color="primary"
            className={classes.mobileButton}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </div>

        {isDefined(count) && (
          <span style={{ marginRight: '5px' }}>{count} шт.</span>
        )}
      </div>
    </div>
  )

  return (
    <>
      <Hidden xsDown implementation="css">
        <DesktopVersion />
      </Hidden>
      <Hidden smUp implementation="css">
        <MobileVersion />
      </Hidden>
    </>
  )
}

Ticket.propTypes = propTypes
Ticket.defaultProps = defaultProps
export default Ticket

// styles
const useStyles = makeStyles((theme) => ({
  mobileContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',

    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f3f3f3',

    position: 'relative',
    padding: '1em',
  },
  mobileTicketItem: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f3f3f3',

    position: 'relative',
    padding: '1em 2em',

    // '&:before': {
    //   content: "''",
    //   position: 'absolute',
    //   top: 'calc(0.9em - 1px)',
    //   height: '1.2em',
    //   width: '0.6em',
    //   border: '2px solid red',
    //   left: '-2px',
    //   borderRadius: '0 1em 1em 0',
    //   borderLeftColor: "#fff",
    // },
  },

  ticketItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  point: {
    color: theme.palette.text.primary,
  },
  accent: {
    color: theme.palette.primary.dark,
    textDecoration: 'underline',
  },
  type: {
    marginRight: theme.spacing(1),
  },
  price: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '1rem',
  },
  mobileActions: {
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: '10px',
  },
  actions: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  mobileButton: {
    marginRight: theme.spacing(1.5),
  },
}))
