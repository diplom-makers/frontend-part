import React from 'react'

import { IconButton, Hidden, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'
import TextsmsIcon from '@material-ui/icons/Textsms'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import PropTypes from 'prop-types'
import { times } from 'ramda'

import { isNotDefined, isDefined } from 'utils/ramda'

const propTypes = {
  title: PropTypes.string.isRequired,
  raiting: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  departDate: PropTypes.string.isRequired,
  arrivalDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  arrivalPount: PropTypes.string.isRequired,
  discountPrecent: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
}
const defaultProps = {}

const getPrecent = (p) => `-${p}%`
const getPrice = (p) => `${p} p.`
const getFullPrice = (price, didcount) =>
  `${Math.round((price / (100 - didcount)) * 100)} p.`

function TourBlock(props) {
  const classes = useStyles()
  const {
    title,
    raiting,
    price,
    description,
    arrivalPount,
    arrivalDate,
    departDate,
    coverImg,
    type,
    discountPrecent,
    count,
  } = props

  const renderStar = () => <StarIcon style={{ color: '#fac917' }} />

  return (
    <div className={classes.container}>
      <div style={{ display: 'flex', flex: 1 }}>
        <Hidden smDown implementation="css">
          <div className={classes.imgContainer}>
            <img className={classes.img} src={coverImg} alt="tour" />
          </div>
        </Hidden>

        <div className={classes.item}>
          <div className={classes.raitingContainer}>
            <div>{raiting},2 рейтинг</div>
          </div>
          <div>{times(renderStar, raiting)}</div>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="h6">{arrivalPount}</Typography>
          <Typography variant="subtitle">
            {departDate} - {arrivalDate}
          </Typography>

          <Typography variant="subtitle2" style={{ display: 'flex' }}>
            Тип Тура:
            <Typography variant="subtitle2" className={classes.type}>
              {type}
            </Typography>
          </Typography>

          <Hidden smUp implementation="css">
            {isDefined(count) && <span>{count} шт.</span>}
            {isNotDefined(count) && (
              <div style={{ marginTop: '10px' }}>
                <Button variant="contained" color="primary">
                  Оплатить в 1 клик
                </Button>

                <IconButton color="primary">
                  <AddShoppingCartIcon />
                </IconButton>
              </div>
            )}
          </Hidden>
        </div>
      </div>

      <Hidden smDown implementation="css" style={{ flex: 1 }}>
        <div className={`${classes.item} ${classes.separator}`}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <div>
              <TextsmsIcon />
            </div>
            <div>
              <FavoriteBorderIcon />
            </div>
            <div>
              <WhatsAppIcon />
            </div>
          </div>
          {isDefined(count) && <span>{count} шт.</span>}
          {isNotDefined(count) && (
            <Button variant="contained" color="primary">
              {price} руб
            </Button>
          )}
        </div>
      </Hidden>

      <Hidden smUp implementation="css">
        <div className={classes.prices}>
          {isDefined(discountPrecent) && (
            <span className={`${classes.oldPrice} ${classes.price}`}>
              {getFullPrice(price, discountPrecent)}
            </span>
          )}

          <span className={classes.price}>{getPrice(price)}</span>
        </div>
      </Hidden>

      {/* <span className={classes.discountTag}>{discountPrecent}%</span> */}
    </div>
  )
}

TourBlock.propTypes = propTypes
TourBlock.defaultProps = defaultProps
export default TourBlock

// styles
const useStyles = makeStyles((theme) => ({
  type: {
    marginLeft: '3px',
    color: theme.palette.primary.dark,
  },
  raitingContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),

    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),

    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  container: {
    display: 'flex',
    alignItems: 'stretch',
    width: '100%',
    backgroundColor: theme.palette.grey[100],
    borderRadius: '12px',
    position: 'relative',

    [theme.breakpoints.up('sm')]: {
      overflow: 'hidden',
    },
  },
  imgContainer: {
    width: '250px',
    display: 'flex',
    height: '100%',
    position: 'relative',
  },
  img: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  separator: {
    borderLeft: '1px solid',
    borderColor: theme.palette.grey[200],
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: '25px',
    paddingBottom: '25px',
  },

  price: {
    fontSize: theme.typography.subtitle1.fontSize,
    marginRight: theme.spacing(0.5),
  },
  oldPrice: {
    textDecoration: 'line-through',
    color: theme.palette.grey[600],
  },
  prices: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '15px',
    right: '15px',
  },
  discountTag: {
    color: theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '0',
    left: '0',
  },
}))
