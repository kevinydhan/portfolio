import type { GetThemeValueFunction } from '$typings'
import {
  borders,
  boxShadows,
  colors,
  opacities,
  transitions,
} from '../global/theme'

// const getThemeValue = (themeKey: keyof typeof defaultTheme) => {
//   return (key: keyof typeof defaultTheme[typeof themeKey]) => ({ theme }) => {
//     return theme[themeKey][key]
//   }
// }

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

/**
 * Returns the value corresponding to the given key in `theme.borders`.
 *
 * @example
 * getBorder('gridlines')
 * // Returns '0.0625rem solid #e6eaee'
 */
export const getBorder: GetThemeValueFunction<keyof typeof borders> = (
  borderKey
) => ({ theme }) => theme.borders[borderKey]

/**
 * Returns the value corresponding to the given key in `theme.transitions`.
 *
 * @example
 * getTransition('linkText')
 * // Returns 'opacity 125ms ease-in'
 */
export const getOpacity: GetThemeValueFunction<keyof typeof opacities> = (
  opacityKey
) => ({ theme }) => theme.opacities[opacityKey]

/**
 * Returns the value corresponding to the given key in `theme.transitions`.
 *
 * @example
 * getTransition('linkText')
 * // Returns 'opacity 125ms ease-in'
 */
export const getTransition: GetThemeValueFunction<keyof typeof transitions> = (
  transitionKey
) => ({ theme }) => theme.transitions[transitionKey]
