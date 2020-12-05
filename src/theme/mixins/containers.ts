import { rem } from 'polished'
import { css } from 'styled-components'
import { breakpoints } from '../global/theme'

/**
 * This mixin should be used on elements that span the entire width of the
 * window.
 */
export const contentContainerMixin = css`
  width: 90%;
  max-width: ${rem(breakpoints['lg-1'])};
  margin: 0 auto;
`
