import React from 'react'

import { Hidden, Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { PageTitle } from 'components'
import { isDefined } from 'utils/ramda'

const propTypes = {}
const defaultProps = {}

const data = {
  coverImg:
    'https://cdn.book24.ru/v2/ITD000000001114512/COVER/cover1__w220.jpg',
  price: 496,
  description:
    'С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации систем массового участия.',
  name: 'Будущее сегодня: как пандемия изменила мир',
  discountPrecent: 12,
  id: 1,
}

const getPrecent = (p) => `-${p}%`
const getPrice = (p) => `${p} p.`
const getFullPrice = (price, didcount) =>
  `${Math.round((price / (100 - didcount)) * 100)} p.`

function OfferPage() {
  const classes = useStyles()

  return (
    <>
      <div className={classes.pagetitleWrapper}>
        <PageTitle />
      </div>
      <Grid container spacing={3} className={classes.container}>
        <Grid Grid item xs={12} md={5} className={classes.imgContainer}>
          <img src={data.coverImg} alt="cover" className={classes.img} />
        </Grid>
        <Grid item xs={12} md={7} className={classes.offerDescription}>
          <div>
            <div>
              <Typography variant="h3" className={classes.offerName}>
                {data.name}
              </Typography>

              <Link to="/">
                <Typography variant="subtitle2">
                  Шефранадзе София Паатовна
                </Typography>
              </Link>
            </div>

            <div className={classes.description}>
              <Typography variant="h5">Описание</Typography>
              <Typography variant="subtitle">{data.description}</Typography>
            </div>
          </div>

          <Hidden smDown>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              className={classes.button}
            >
              В корзину {data.price}р.
            </Button>
          </Hidden>
        </Grid>
      </Grid>

      <Hidden smUp>
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            className={classes.button}
          >
            В корзину {data.price}р.
          </Button>
        </div>
      </Hidden>
    </>
  )
}

OfferPage.propTypes = propTypes
OfferPage.defaultProps = defaultProps
export default OfferPage

// styles
const useStyles = makeStyles((theme) => ({
  button: {
    width: '100%',
  },
  pagetitleWrapper: {
    marginLeft: theme.spacing(2),
  },
  buttonContainer: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    left: 0,
    padding: theme.spacing(1.5),
    backgroundColor: 'rgba(33, 150, 243, 0.15)',
  },
  container: {
    // overflow: 'hidden',
    width: '100%',
    margin: 'auto',
  },
  description: {
    marginTop: theme.spacing(2),
  },
  offerName: {
    lineHeight: '1.2',
  },
  imgContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {},

  offerDescription: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    paddingTop: theme.spacing(1.5),
  },
}))
