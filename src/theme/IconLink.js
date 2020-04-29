import styled from 'styled-components'
import { theme } from '@theme'

const IconLink = styled('a')`
    svg {
        height: 36px;
    }

    path,
    rect {
        transition: fill 150ms ease-in-out;
        fill: #fff;
    }

    &:hover,
    &:active {
        path,
        rect {
            fill: rgba(${theme.colorHeading}, 0.6);
        }
    }

    @media only screen and (min-width: 1366px) {
        svg {
            width: 40px;
            height: 40px;
        }
    }
`

export default IconLink
