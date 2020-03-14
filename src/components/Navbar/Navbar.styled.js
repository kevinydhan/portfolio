import styled from 'styled-components'
import theme from '../../theme'
import { isRootTransparent } from './Navbar.styled.func'
const { mediaQueries } = theme

export const Root = styled('header')`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    display: flex;
    justify-content: center;

    width: 100vw;
    height: 4.25em;

    transition: background 500ms ease;

    ${isRootTransparent}
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

    ${mediaQueries.between(
        { min: 'xs', max: 'md' },
        `
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1;

        width: 100%;`
    )}

    ${mediaQueries.up(
        { min: 'md' },
        `
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 400px;`
    )}
`

export const NavListItem = styled('li')``

export const NavLink = styled('a')``
