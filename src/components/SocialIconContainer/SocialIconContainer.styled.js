import styled, { css } from 'styled-components'

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

    &::before,
    &::after {
        content: '';
        position: absolute;

        width: 5px;
        height: 60px;

        background: ${(props) => props.theme.colors.primary};

        transition: opacity 250ms ease;

        ${(props) => {
            const { isLandingVisible } = props
            return isLandingVisible
                ? `
                opacity: 1;`
                : `
                opacity: 0;`
        }}
    }

    &::before {
        bottom: 100%;
    }

    &::after {
        top: 100%;
    }

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
