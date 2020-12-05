import { GetThemeValueFunction } from '$typings'
import { boxShadows, colors } from '../global/theme'

/**
 * Returns the value corresponding to the given key in `theme.colors`.
 *
 * @example
 * getColor('link')
 * // Returns '#000'
 */
export const getColor: GetThemeValueFunction<keyof typeof colors> = (
  colorKey
) => ({ theme }) => theme.colors[colorKey]

/**
 * Returns the value corresponding to the given key in `theme.boxShadows`.
 *
 * @example
 * getBoxShadow('primary')
 * // Returns '0rem 0.25rem 1rem rgba(0, 0, 0, 0.075)'
 */
export const getBoxShadow: GetThemeValueFunction<keyof typeof boxShadows> = (
  boxShadowKey
) => ({ theme }) => theme.boxShadows[boxShadowKey]
