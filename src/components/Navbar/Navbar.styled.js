import styled, { css } from 'styled-components'
import theme from '../../theme'
import RootFuncThemes from './function-themes/Root.styled.func'
const { mediaQueries } = theme

/**
 * @todo - Refactor border thickness from `Root` and `NavList` into a higher
 *         scoped variable
 *       - Refactor the padding into a higher scoped variable or place it in
 *         the theme
 */

export const Root = styled('header')`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    display: flex;
    justify-content: center;

    width: 100%;
    height: ${(props) => props.theme.dimensions.heights.Navbar};

    transition: background 500ms ease;

    ${RootFuncThemes.isTransparent}
    ${RootFuncThemes.mediaQueries.betweenXSandSM}
    ${RootFuncThemes.mediaQueries.betweenXSAndMD}
    ${RootFuncThemes.mediaQueries.upMD}
`

export const ToggleNavListButton = styled('span')`
    ${(props) => {
        const { xs, sm } = props.theme.dimensions.breakpoints
        return css`
            @media only screen and (max-width: ${sm}px) and (min-width: ${xs}px) {
                width: 32px;
                height: 32px;
                border: 1px solid blue;
                border-radius: 50%;
            }
        `
    }}

    ${(props) => {
        const { sm } = props.theme.dimensions.breakpoints
        return css`
            @media only screen and (min-width: ${sm}px) {
                display: none;
            }
        `
    }}
`

export const NavContainer = styled('nav')`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1024px;
    height: 100%;
`

export const NavList = styled('ul')`
    list-style: none;

    ${(props) => {
        const { xs, sm } = props.theme.dimensions.breakpoints
        const { isVisible } = props

        return css`
            @media only screen and (max-width: ${sm}px) and (min-width: ${xs}px) {
                position: absolute;
                top: calc(100% + 1px);
                left: 0;
                z-index: 1;

                display: ${isVisible ? 'block' : 'none'};

                width: 100%;

                background: rgba(255, 255, 255, 0.95);

                border-bottom: 1px solid black;
            }
        `
    }}

    ${(props) => {
        const { sm, md } = props.theme.dimensions.breakpoints

        return css`
            @media only screen and (max-width: ${md}px) and (min-width: ${sm}px) {
                display: flex;
                align-items: center;
                justify-content: space-between;

                width: 100%;
            }
        `
    }}

    ${(props) => {
        const { md } = props.theme.dimensions.breakpoints

        return css`
            @media only screen and (min-width: ${md}px) {
                display: flex;
                align-items: center;
                justify-content: space-between;

                width: 100%;
                max-width: 400px;
            }
        `
    }}
`

/**
 *
    ${mediaQueries.up(
        { min: 'sm' },
        `
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 400px;`
    )}
 */

export const NavListItem = styled('li')`
    ${mediaQueries.between(
        { min: 'xs', max: 'sm' },
        `
        padding: 16px;`
    )}
`

export const NavLink = styled('a')``
