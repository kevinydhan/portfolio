import { createGlobalStyle } from 'styled-components'
import FontFace from '@theme/FontFace'
import { theme } from '@theme'

const {
    colorText,
    colorHeading,
    colorBackground,
    fontFamilyPrimary,
    fontSizes,
    breakpointXs,
    breakpointSm,
    breakpointMd,
    breakpointLg,
    breakpointXl,
} = theme

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
        color: rgba(${colorText}, 1);
        font-size: 100%;
        font-family: ${fontFamilyPrimary}, sans-serif;
        letter-spacing: 0.1rem;
        scroll-behavior: smooth;
    }

    body {
        background: rgba(${colorBackground}, 1);
    }

    h1,
    h2,
    h3 {
        color: rgba(${colorHeading}, 1);
    }

    a {
        color: rgba(${colorHeading}, 1);
        text-decoration: none;
    }

    h1 {
        font-size: ${fontSizes['+3']};
    }

    h2 {
        font-size: ${fontSizes['+3']};
    }

    h3 {
        font-size: ${fontSizes['+2']};
    }

    p,
    a {
        font-size: ${fontSizes['0']};
        line-height: 1.65;
    }

    #gatsby-focus-wrapper {
        display: flex;
        /* align-items: center; */
        justify-content: center;
    }

    @media only screen and (min-width: ${breakpointXs}) and (orientation: portrait) {
        h1 {
            font-size: 12vw;
            line-height: 1.2;
        }
    }

    @media only screen and (min-width: ${breakpointSm}) and (orientation: landscape) {
        h1 {
            font-size: 8vw;
            line-height: 1.2;
        }
    }

    @media only screen and (min-width: ${breakpointMd}) and (orientation: portrait) {
        h1 {
            font-size: ${fontSizes['+5']};
        }
    }
    @media only screen and (min-width: ${breakpointMd}) and (orientation: landscape) {
        h1 {
            font-size: ${fontSizes['+4']};
        }
    }

    @media only screen and (min-width: ${breakpointMd}) {
        html {
            font-size: 102.5%;
        }
    }

    @media only screen and (min-width: ${breakpointLg}) {
        html {
            font-size: 105%;
        }

        h1 {
            font-size: ${fontSizes['+5']};
        }

        h2 {
            font-size: ${fontSizes['+4']};
        }

        h3 {
            font-size: ${fontSizes['+3']};
        }
    }

    @media only screen and (min-width: ${breakpointXl}) {
        html {
            font-size: 107.25%;
            letter-spacing: 0.12rem;
        }

        h1 {
            font-size: ${fontSizes['+6']};
        }

        h2 {
            font-size: ${fontSizes['+5']};
        }

        h3 {
            font-size: ${fontSizes['+4']};
        }

        p {
            font-size: ${fontSizes['+0.5']};
            line-height: 1.65;
        }
    }
`
