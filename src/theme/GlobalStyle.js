import { createGlobalStyle } from 'styled-components'
import FontFace from '@theme/FontFace'
import { theme } from '@theme'

const { colors, fontFamily, dimensions } = theme
const { breakpoints, heights } = dimensions

export default createGlobalStyle`
    ${FontFace}

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    html {
        box-sizing: border-box;
        color: rgba(${colors.text}, 1);
        font-family: ${fontFamily.primary}, sans-serif;
        letter-spacing: 0.1rem;
        scroll-behavior: smooth;
    }

    body {
        background: rgba(${colors.background}, 1);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: rgba(${colors.heading}, 1);
    }

    a {
        color: rgba(${colors.heading}, 1);
        text-decoration: none;
    }

    #gatsby-focus-wrapper {
        /* Offsets the entire page away from the navigation bar. */
        padding-top: ${heights.navbar.sm};
    }
`
