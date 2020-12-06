import React, { useState } from 'react'

import { InputBase } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import PropTypes from 'prop-types'
import { when, equals, partial, pipe } from 'ramda'

import { getIn } from 'utils/ramda'

const propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

const defaultProps = {
  value: '',
}

function Index({ onChange, value: externalValue }) {
  const classes = useStyles()

  const [value, setValue] = useState(externalValue)

  const handleKeyDown = pipe(
    getIn('key'),
    when(equals('Enter'), partial(onChange, [value])),
  )

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        onKeyDown={handleKeyDown}
        placeholder="Поиск…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        value={value}
        onChange={pipe(getIn('target.value'), setValue)}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}

Index.propTypes = propTypes
Index.defaultProps = defaultProps
export default Index

// styles
const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '0',
    '&:focus': {
      width: '12ch',
    },
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))
