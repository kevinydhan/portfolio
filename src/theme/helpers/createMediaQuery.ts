import { em } from 'polished'
import { CreateMediaQueryOptions } from '$typings'
import { breakpoints } from '../global/theme'

const createMediaQuery = (options: CreateMediaQueryOptions): string => {
  const { minWidthKey, maxWidthKey } = options
  const queries = ['@media screen']

  if (minWidthKey) {
    const minWidthValue = em(breakpoints[minWidthKey])
    queries.push(`(min-width: ${minWidthValue})`)
  }
  if (maxWidthKey) {
    const maxWidthValue = em(breakpoints[maxWidthKey] - 1)
    queries.push(`(max-width: ${maxWidthValue})`)
  }

  return queries.join(' and ')
}

export default createMediaQuery
