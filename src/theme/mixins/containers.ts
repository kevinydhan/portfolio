import { margin, rem } from 'polished'
import { css } from 'styled-components'

/**
 * This mixin should be used on elements that span the entire width of the
 * window.
 */
export const contentContainerMixin = css`
  width: 90%;
  max-width: ${({ theme }) => rem(theme.numerics.contentMaxWidth)};
  ${margin(null, 'auto')}
`
