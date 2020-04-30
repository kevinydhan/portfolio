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
        letter-spacing: 0.1em;
        scroll-behavior: smooth;
    }

    body {
        background: rgba(${theme.colorBackground}, 1);
    }

    a {
        color: rgba(${theme.colorHeading}, 1);
        text-decoration: none;
    }

    h1,
    h2,
    h3 {
        color: rgba(${theme.colorHeading}, 1);
    }

    h1 {
        font-size: 7.662vw;
    }

    h3 {
        font-size: 22px;
    }

    p {
        font-size: 15px;
    }

    @media only screen and (min-width: 768px) {
        h1 {
            font-size: 40px;
        }

        p {
            font-size: 16px;
            line-height: 1.8;
        }
    }

    @media only screen and (min-width: 1024px) {
        h1 {
            font-size: 44px;
        }

        h3 {
            font-size: 32px;
        }
    }

    @media only screen and (min-width: 1366px) {
        h1 {
            font-size: 48px;
        }

        h3 {
            font-size: 36px;
        }

        p {
            max-width: 560px;
            font-size: 19px;
            line-height: 1.6;
        }
    }

    @media screen and (min-width: 1600px) {
        h1 {
            font-size: 52px;
        }
    }
`
