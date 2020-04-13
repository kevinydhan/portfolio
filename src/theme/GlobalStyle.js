import { createGlobalStyle } from 'styled-components'
import { theme } from '@theme'

const { colors } = theme
const { heights, breakpoints } = theme.dimensions

export default createGlobalStyle`
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
        font-family: 'Bai Jamjuree', sans-serif;
        font-size: 1.125rem;
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

    h1 {
        font-size: 2.5rem;
        letter-spacing: 8px;
    }

    h2 {
        font-size: 2.5rem;
        letter-spacing: 6px;
    }

    h3 {
        font-size: 2.125rem;
    }

    h4 {
        font-size: 1.75rem;
    }

    h5 {
        font-size: 1.5rem;
    }

    h6 {
        font-size: 1.25rem;
    }

    p {
        letter-spacing: 1px;
        line-height: 1.75rem;
    }

    a {
        color: rgba(${colors.text}, 1);
        cursor: pointer;
        letter-spacing: 2px;
        padding-right: -2px;
        text-decoration: none;
    }

    @media only screen and (max-width: ${breakpoints['iPhone5/SE']}) {
        #gatsby-focus-wrapper {
            padding-top: ${heights.navbar};
        }
    }
`
