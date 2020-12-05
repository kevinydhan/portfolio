import { em, rem, rgba } from 'polished'
import boxShadow from '../helpers/createBoxShadowValue'

/**
 * Defines a map where each key is equal to a color name and the
 * corresponding value is either the associated hex, `rgb`, or `rgba` value.
 */
export const palette = {
  black: '#000',
  darkGreyBlue: '#595c5e',
  lightGreyBlue: '#e6eaee',
  white: '#f0f1f2',
}

/**
 * Defines a map where each key is equal to a UI element or similar and the
 * corresponding value is the color value. These values will be used inside
 * the `styled-components` components.
 */
export const colors = {
  background: palette.white,
  body: palette.darkGreyBlue,
  gridlines: palette.lightGreyBlue,
  heading: palette.black,
  link: palette.black,
}

export const borders = {
  gridlines: `${rem(1)} solid ${colors.gridlines}`,
}

export const boxShadows = {
  bottomNavigation: boxShadow([0, -4, 16], rgba(palette.black, 0.1)),
  projectImage: boxShadow([0, 4, 32], rgba(palette.black, 0.125)),
  topNavigation: boxShadow([0, 4, 16], rgba(palette.black, 0.075)),
}

export const fonts = {
  primary: "'Muli', sans-serif",
}

/**
 * Defines the breakpoints for the media queries and parts of the
 * application. The naming convention for the keys are as follows:
 * - `${2-letter size identifier}-${positive integer or 0}`
 */
export const breakpoints = {
  0: 0,
  'sm-0': 320,
  'sm-1': 568,
  'md-0': 768,
  'md-1': 1024,
  'lg-0': 1200,
  'lg-1': 1440,
}

export const opacities = {
  linkTextHover: 0.6,
}

export const transitions = {
  buttonTextHover: 'opacity 125ms ease-out, transform 125ms ease-out',
  buttonTextAfterHover:
    'opacity 125ms ease-out, transform 125ms ease-out 175ms',
  linkHover: 'transform 150ms ease-out',
  linkTextHover: 'opacity 150ms ease-out',
  logoHover: 'opacity 150ms ease-out, transform 150ms ease-out',
  /**
   * Defines the transition used when the navigation transitions between
   * visible and hidden states.
   */
  navigationHide: 'transform 150ms ease-out',
  primary: '175ms ease-out',
}

export const mediaQueries = {
  desktop: [
    '@media',
    `(hover: hover) and (min-width: ${em(breakpoints['md-0'])})`,
  ].join(', '),
  mobile: [
    '@media',
    '(hover: none)',
    '(hover: on-demand)',
    `(hover: hover) and (max-width: ${em(breakpoints['md-0'] - 1)})`,
  ].join(', '),
}

const theme = {
  borders,
  boxShadows,
  breakpoints,
  colors,
  fonts,
  opacities,
  transitions,
}

export default theme
