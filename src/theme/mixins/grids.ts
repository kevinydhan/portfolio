import { css } from 'styled-components'
import media from '../helpers/createMediaQuery'

/**
 * 0    to 768  = 1 col
 * 768  to 1024 = 2 col
 * 1024 and up  = 4 col
 */

export const mainGridMixin = css`
  display: grid;

  ${media({ maxWidthKey: 'md-1', minWidthKey: 'md-0' })} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media({ minWidthKey: 'md-1' })} {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const mainGridChildMixin = css`
  ${media({ maxWidthKey: 'md-1', minWidthKey: 'md-0' })} {
    grid-column: 1 / 3;
  }

  ${media({ minWidthKey: 'md-1' })} {
    grid-column: 1 / 5;
  }
`
