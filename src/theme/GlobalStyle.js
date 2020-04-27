import { createGlobalStyle } from 'styled-components'
import FontFace from '@theme/FontFace'
import { theme } from '@theme'

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
        overflow-x: hidden;
        color: rgba(${theme.colorText}, 1);
        font-family: ${theme.fontFamilyPrimary}, sans-serif;
        letter-spacing: 0.17em;
        scroll-behavior: smooth;
    }

    body {
        background: rgba(${theme.colorBackground}, 1);
    }

    h1,
    h2,
    h3 {
        color: rgba(${theme.colorHeading}, 1);
    }

    a {
        color: rgba(${theme.colorHeading}, 1);
        text-decoration: none;
    }
`
