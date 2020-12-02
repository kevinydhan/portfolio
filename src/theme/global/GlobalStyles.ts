import { createGlobalStyle } from 'styled-components'
import { normalize, rem } from 'polished'
import { mediaQueries } from './theme'
import { mainGridMixin, mainGridChildMixin } from '../mixins/grids'
import { contentContainerMixin } from '../mixins/containers'

import MuliRegular from '../fonts/Muli-Regular.ttf'
import MuliSemiBold from '../fonts/Muli-SemiBold.ttf'
import MuliBold from '../fonts/Muli-Bold.ttf'

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
    font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
    letter-spacing: 0.016em;
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
  }

  main {
    ${mainGridMixin}
    ${contentContainerMixin}
    position: relative;
  }

  section {
    ${mainGridChildMixin}
    margin-bottom: ${rem(80)};

    ${mediaQueries.mobile} {
      padding-bottom: ${rem(120)};
    }

    ${mediaQueries.desktop} {
      padding-top: ${rem(120)};
    }
  }

  p,
  ul,
  dd {
    color: ${({ theme }) => theme.colors.body};
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyles
