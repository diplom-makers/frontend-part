import React from 'react'

import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import PropTypes from 'prop-types'

import { isDefined } from 'utils/ramda'

const propTypes = {
  coverImg: PropTypes.string,
  price: PropTypes.number.isRequired,
  discountPrecent: PropTypes.number,
}
const defaultProps = {
  coverImg: null,
  discountPrecent: null,
}

const getPrecent = (p) => `-${p}%`
const getPrice = (p) => `${p} p.`
const getFullPrice = (price, didcount) =>
  `${Math.round((price / (100 - didcount)) * 100)} p.`

function OfferBlock({ coverImg, price, discountPrecent }) {
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
      <div className={classes.imgContainer}>
        {renderCoverImg(coverImg)}

        {isDefined(discountPrecent) && (
          <span className={classes.discountTag}>
            {getPrecent(discountPrecent)}
          </span>
        )}
      </div>
      <div className={classes.footer}>
        <span className={classes.price}>{getPrice(price)}</span>

        {isDefined(discountPrecent) && (
          <span className={`${classes.oldPrice} ${classes.price}`}>
            {getFullPrice(price, discountPrecent)}
          </span>
        )}
      </div>
    </div>
  )
}

OfferBlock.propTypes = propTypes
OfferBlock.defaultProps = defaultProps
export default OfferBlock

// styles
const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    minWidth: '180px',
  },

  imgContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: theme.spacing(1),

    height: '100%',
    width: '100%',

    [theme.breakpoints.down('xs')]: {
      maxHeight: '265px',
      maxWidth: '180px',
    },
  },

  img: {
    width: '100%',
    height: '100%',
    flex: 1,
    borderRadius: '4px',
  },
  coverPlaceholder: {
    backgroundColor: theme.palette.grey[400],
    width: '100%',
    height: '100%',
    borderRadius: '4px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: theme.palette.grey[600],
  },
  placeholderIcon: {
    marginRight: theme.spacing(0.5),
    color: theme.palette.grey[600],
  },

  discountTag: {
    position: 'absolute',
    bottom: -theme.spacing(1),
    left: -theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    padding: '4px 8px',
    borderRadius: theme.spacing(1),
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
    paddingTop: theme.spacing(0.5),
  },
}))
