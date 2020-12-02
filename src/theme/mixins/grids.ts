import { css } from 'styled-components'

/**
 * 0    to 768  = 1 col
 * 768  to 1024 = 2 col
 * 1024 and up  = 4 col
 */

export const mainGridMixin = css`
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1366px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const mainGridChildMixin = css`
  @media screen and (min-width: 768px) {
    grid-column: 1 / 3;
  }

  @media screen and (min-width: 1024px) {
    grid-column: 1 / 5;
  }

  @media screen and (min-width: 1366px) {
    grid-column: 1 / 5;
  }
`
