import React from 'react'

import { IconButton, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import PropTypes from 'prop-types'

import { isDefined } from 'utils/ramda'

const propTypes = {
  coverImg: PropTypes.string,
  price: PropTypes.number.isRequired,
  discountPrecent: PropTypes.number,
  name: PropTypes.string.isRequired,
  count: PropTypes.number,
}
const defaultProps = {
  coverImg: null,
  discountPrecent: null,
  count: 0,
}

const getPrecent = (p) => `-${p}%`
const getPrice = (p) => `${p} p.`
const getFullPrice = (price, didcount) =>
  `${Math.round((price / (100 - didcount)) * 100)} p.`

function OfferCartItem({ coverImg, price, discountPrecent, name, count }) {
  const classes = useStyles()

  const renderCoverImg = (src) => {
    if (isDefined(src))
      return <img src={src} alt="Обложка книги" className={classes.img} />

    return (
      <div className={`${classes.img} ${classes.coverPlaceholder}`}>
        {/* <SentimentVeryDissatisfiedIcon className={classes.placeholderIcon} /> */}
        <Typography variant="h6" className={classes.placeholderText}>
          No Image
        </Typography>
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>{renderCoverImg(coverImg)}</div>

      <div className={classes.content}>
        <div>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1">Это описание книги</Typography>
        </div>

        <div className={classes.footer}>
          <div className={classes.prices}>
            <span className={classes.price}>{getPrice(price)}</span>

            {isDefined(discountPrecent) && (
              <span className={`${classes.oldPrice} ${classes.price}`}>
                {getFullPrice(price, discountPrecent)}
              </span>
            )}
          </div>

          <Typography variant="caption" display="block" gutterBottom>
            {count} шт.
          </Typography>
        </div>
      </div>

      {isDefined(discountPrecent) && (
        <span className={classes.discountTag}>
          {getPrecent(discountPrecent)}
        </span>
      )}
    </div>
  )
}

OfferCartItem.propTypes = propTypes
OfferCartItem.defaultProps = defaultProps
export default OfferCartItem

// styles
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'row',
    position: 'relative',

    border: '1px solid',
    borderColor: theme.palette.grey[200],
    borderRadius: '4px',
    overflow: 'hidden',
  },
  imgContainer: {
    width: '120px',
    height: '120px',
    backgroundColor: theme.palette.grey[200],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  img: {
    // width: 'auto',
    height: '100%',
  },
  coverPlaceholder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
    flex: 1,
  },

  discountTag: {
    position: 'absolute',
    right: theme.spacing(0.5),
    top: theme.spacing(0.5),
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightBold,
    padding: '4px 8px',
    borderRadius: theme.spacing(1),
    fontSize: '12px',
  },

  price: {
    fontSize: theme.typography.subtitle1.fontSize,
    marginRight: theme.spacing(0.5),
  },
  oldPrice: {
    textDecoration: 'line-through',
    color: theme.palette.grey[600],
  },

  footer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
  },
}))
