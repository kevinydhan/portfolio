import { useObserver, useQuery } from './hooks'
import { ProjectPropType } from './types'
export { useObserver, useQuery, ProjectPropType }

/**
 * Generates a key that is passed to the React element.
 *
 * @example
 * generateKey('My example project', 1) // 'My-example-project-1'
 * generateKey('String', 2) // 'String-2'
 *
 * @param {string} str - String that acts as a somewhat unique identifier
 * @param {string | number} i - Index number
 *
 * @returns {string} - Key
 */
export const generateKey = (str, i) => `${str.split(' ').join('-')}-${i}`
