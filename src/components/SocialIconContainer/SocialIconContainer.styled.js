import styled, { css } from 'styled-components'
import { rootPseudoElements } from './SocialIconContainer.styled.func'

export const Root = styled('div')`
    position: fixed;
    bottom: calc(1em + 60px);
    right: 2.75em;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    height: 200px;

    transition: transform 350ms ease;

    ${(props) => {
        const { isLandingVisible } = props

        return isLandingVisible
            ? `transform: translateY(0);`
            : `transform: translateY(60px);`
    }}

    ${rootPseudoElements}


    ${(props) => {
        const { sm } = props.theme.dimensions.breakpoints

        return css`
            @media only screen and (min-width: ${sm}px) {
                svg {
                    width: 42px;
                    height: 42px;
                }
            }
        `
    }}
`

export const IconLink = styled('a')``
