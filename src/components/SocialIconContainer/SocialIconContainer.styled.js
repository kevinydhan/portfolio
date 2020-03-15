import styled, { css } from 'styled-components'

export const Root = styled('div')`
    position: fixed;
    bottom: calc(1em + 60px);
    right: 3em;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    height: 200px;

    &::before,
    &::after {
        content: '';
        position: absolute;

        width: 5px;
        height: 60px;
        background: ${(props) => props.theme.colors.primary};
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
