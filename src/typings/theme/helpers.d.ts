import { DefaultTheme, InterpolationFunction } from 'styled-components'
import { theme } from '$theme'

export interface CreateMediaQueryOptions {
  minWidthKey?: keyof typeof theme['breakpoints']
  maxWidthKey?: keyof typeof theme['breakpoints']
}

/**
 * Defines a getter function for retrieving a theme attribute's value.
 *
 * @example
 * ```ts
 * const getColor: GetThemeValueHelper<keyof typeof colors> = (
 * colorKey
 * ) => ({ theme }) => theme.colors[colorKey]
 * ```
 *
 * @template Key - Key that is used to retrieve the theme attribute's value.
 */
export type GetThemeValueFunction<Key = ''> = (
  key: Key
) => InterpolationFunction<{ theme: DefaultTheme }>
