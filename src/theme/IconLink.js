import styled from 'styled-components'
import theme from './theme'

const IconLink = styled('a')`
    svg {
        height: 2.25rem;
        transform: translateY(0);
        transition: transform ${theme.transitionIconLink};
    }

    path,
    rect {
        transition: fill 150ms ease-in-out;
        fill: #fff;
    }

    &:hover,
    &:active {
        svg {
            transform: translateY(-0.25rem);
        }

        path,
        rect {
            fill: rgba(${theme.colorHeading}, 0.6);
        }
    }

    @media only screen and (min-width: ${theme.breakpointXl}) {
        svg {
            width: 2.5rem;
            height: 2.5rem;
        }
    }
`

export default IconLink
