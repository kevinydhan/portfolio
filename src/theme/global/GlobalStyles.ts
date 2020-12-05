import { normalize, rem } from 'polished'
import { createGlobalStyle } from 'styled-components'
import MuliBold from '../fonts/Muli-Bold.ttf'
import MuliRegular from '../fonts/Muli-Regular.ttf'
import MuliSemiBold from '../fonts/Muli-SemiBold.ttf'
import media from '../helpers/createMediaQuery'
import { getColor } from '../helpers/getThemeValue'
import { contentContainerMixin } from '../mixins/containers'
import { mainGridChildMixin, mainGridMixin } from '../mixins/grids'
import { mediaQueries } from './theme'

/**
 * Typographies
 *
 *   vw  |  h1 | h2 | h3 | body | small
 *  320     46   36   26   16     14
 *  768     52   42   30   17     16
 */
const GlobalStyles = createGlobalStyle`
  ${normalize()}

  @font-face {
    font-weight: 400;
    font-family: 'Muli';
    font-style: normal;
    font-display: swap;
    src: url(${MuliRegular}) format('truetype');
  }

  @font-face {
    font-weight: 600;
    font-family: 'Muli';
    font-style: normal;
    font-display: swap;
    src: url(${MuliSemiBold}) format('truetype');
  }

  @font-face {
    font-weight: 700;
    font-family: 'Muli';
    font-style: normal;
    font-display: swap;
    src: url(${MuliBold}) format('truetype');
  }

  html {
    font-size: 100%;
    /* stylelint-disable-next-line
       font-family-no-missing-generic-family-keyword */
    font-family: ${({ theme }) => theme.fonts.primary};
    letter-spacing: 0.016em;
    scroll-behavior: smooth;
  }

  body {
    background: ${getColor('background')};
  }

  main {
    ${mainGridMixin}
    ${contentContainerMixin}
    position: relative;
  }

  section {
    ${mainGridChildMixin}

    ${mediaQueries.mobile} {
      padding-top: ${rem(40)};
      padding-bottom: ${rem(120)};
    }

    ${mediaQueries.desktop} {
      margin: ${rem(120)} 0;
    }
  }

  h1,
  h2,
  h3 {
    line-height: 1;
  }

  h1,
  h2,
  h3,
  dt {
    font-weight: 600;
  }

  p,
  ul,
  dl {
    line-height: 1.5;
  }

  p {
    ${media({ minWidthKey: 'md-0' })} {
      font-size: ${rem(17)};
    }
  }

  p,
  ul,
  dd {
    color: ${getColor('body')};
  }

  a {
    text-decoration: none;
  }

  a,
  dd::before {
    color: ${getColor('link')};
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyles
