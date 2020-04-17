import React from 'react'
import styled from 'styled-components'
import { theme } from '@theme'
import { SquareOutlineButton } from '@theme/icons'
import { navLinks } from '@config'
import { generateKey } from '@utils'

const Navbar = () => (
    <Header>
        <Nav>
            <MenuButtonContainer>
                <SquareOutlineButton />
            </MenuButtonContainer>

            <Logo>Kevin Han</Logo>

            <NavList>
                {navLinks.map((link, i) => (
                    <NavListItem key={generateKey(link.name, i)}>
                        <NavLink href={link.href}>{link.name}</NavLink>
                    </NavListItem>
                ))}
            </NavList>
        </Nav>
    </Header>
)

const colors = theme.colors
const heights = theme.dimensions.heights

/**
 * This element expands to `100vw` at all breakpoints. This element displays
 * the navigation bar's background color.
 */
const Header = styled('header')`
    /* Positional styles */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    /* Box model styles */
    display: flex;

    /* Horizontally aligns the NavList component at viewport widths larger
       than 1440px. */
    justify-content: center;
    width: 100%;
    height: ${heights.navbar.sm};

    /* Visual styles */
    background: rgba(${colors.background}, 0.98);
    /* background: white; */
    /* border-bottom: 1px solid rgba(${colors.border}, 0.95); */

    @media only screen and (min-width: 768px) {
        height: ${heights.navbar.md};
    }
`

/**
 * This element expands to `100%`, or `100vw`, at smaller viewport widths but
 * caps at a `max-width: 1024px;`. This element contains the portfolio logo
 * image and navigation list.
 */
const Nav = styled('nav')`
    /* Positional styles */
    position: relative;

    /* Box model styles */
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    height: 100%;
    padding: 0 16px;

    /* Visual styles */
    /* background: pink; */

    @media only screen and (min-width: 768px) {
        justify-content: space-between;
    }
`

/**
 * This element contains the navigation links. It is a fixed width at larger
 * viewport widths.
 */
const NavList = styled('ul')`
    /* Positional styles */
    position: absolute;
    top: 100%;
    left: 0;

    /* Box model styles */
    /* display: none; */
    width: 100%;
    padding: 0 16px;

    /* Visual styles */
    list-style: none;
    background: rgba(${colors.background}, 0.98);
    /* background: blue; */

    @media only screen and (min-width: 768px) {
        /* Positional styles */
        position: relative;
        top: unset;
        left: unset;

        /* Box model styles */
        display: flex;
        width: auto;
        height: 100%;
        padding: 0;
    }
`

/**
 * This element parents the navigation link. This element provides top and
 * bottom padding at mobile viewports and left margins at larger viewports.
 */
const NavListItem = styled('li')`
    padding: 24px 0;

    @media only screen and (min-width: 768px) {
        padding: 0;
        /* background: red; */

        & + & {
            margin-left: 40px;
        }
    }
`

/**
 * This element contains the navigation link. It takes up the entire width and
 * height of its parent at all viewport widths. This is to allow an end user to
 * be able to click anywhere within the box instead of clicking only on the
 * link. It has a pseudo-element that animates an underline whenever this
 * element is hovered or active.
 */
const NavLink = styled('a')`
    font-size: 20px;

    @media only screen and (min-width: 768px) {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;

        /* Defines the underline at the bottom of each navigation list item. */
        &::after {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: rgba(${colors.blue}, 1);
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 200ms ease;
            content: '';
        }

        &:hover,
        &:active {
            &::after {
                transform: scaleX(1);
                transform-origin: left;
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        font-size: 24px;
    }
`

/**
 * This element contains the square outline SVG.
 */
const MenuButtonContainer = styled('span')`
    cursor: pointer;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`

/**
 * This element contains the website's logo.
 */
const Logo = styled('span')`
    display: none;
    color: rgba(${colors.heading}, 1);

    text-transform: uppercase;

    @media only screen and (min-width: 768px) {
        display: inline-block;
        font-size: 32px;
    }

    @media only screen and (min-width: 1024px) {
        font-size: 36px;
    }
`

export default Navbar
