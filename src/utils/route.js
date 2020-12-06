import qs from 'qs'
import { curry, join } from 'ramda'

export const getPath = curry((path, params) => {
  let result = path
  Object.keys(params).forEach((key) => {
    result = result.replace(`:${key}`, params[key])
  })
  return result
})

export const addQeryParams = curry((path, paramsObj) => {
  return join('?', [path, qs.stringify(paramsObj)])
})
