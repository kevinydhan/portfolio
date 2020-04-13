import styled, { css } from 'styled-components'
import { rootPseudoElements } from './SocialIconContainer.styled.func'

export const Root = styled('div')`
    display: flex;
    align-items: center;

    ${(props) => {
        const { isLandingVisible } = props

        return isLandingVisible
            ? `transform: translateY(0);`
            : `transform: translateY(60px);`
    }}

    /* Media query for mobile viewports */
    ${(props) => {
        const { md } = props.theme.dimensions.breakpoints

        return css`
            @media only screen and (max-width: ${md}px) {
                margin-top: 56px;
                justify-content: space-between;
                width: 170px;
            }
        `
    }}

    /* Media query for tablet and desktop viewports */
    ${(props) => {
        const { md } = props.theme.dimensions.breakpoints

        return css`
            @media only screen and (min-width: ${md}px) {
                position: fixed;
                bottom: calc(1em + 60px);
                right: 2.75em;

                flex-direction: column;
                justify-content: space-around;

                height: 200px;

                transition: transform 350ms ease;

                ${rootPseudoElements}
            }
        `
    }}
`

export const Icon = styled('span')`
    background-size: contain;

    ${(props) => {
        const { backgroundImage } = props
        return css`
            background: url('${backgroundImage}') no-repeat center;
        `
    }}

    /* Media query for mobile viewports */
    ${(props) => {
        const { md } = props.theme.dimensions.breakpoints

        return css`
            @media only screen and (max-width: ${md}px) {
                width: 38px;
                height: 38px;
            }
        `
    }}

    ${(props) => {
        const { md, xl } = props.theme.dimensions.breakpoints

        return css`
            @media only screen and (max-width: ${xl}px) and (min-width: ${md}px) {
                width: 40px;
                height: 40px;
            }
        `
    }}

    ${(props) => {
        const { xl } = props.theme.dimensions.breakpoints

        return css`
            @media only screen and (min-width: ${xl}px) {
                width: 42px;
                height: 42px;
            }
        `
    }}
`

export const IconLink = styled('a')`
    display: flex;
`
