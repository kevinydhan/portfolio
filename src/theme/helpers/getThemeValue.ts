import { GetThemeValueFunction } from '$typings'
import { colors } from '../global/theme'

/**
 * Returns the value corresponding to the given key in `theme.colors`.
 *
 * @example
 * getColor('link') // Returns '#000'
 */
export const getColor: GetThemeValueFunction<keyof typeof colors> = (
  colorKey
) => ({ theme }) => theme.colors[colorKey]
