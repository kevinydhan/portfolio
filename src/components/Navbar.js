import React from 'react'
import styled from 'styled-components'
import { theme } from '@theme'

const Navbar = () => {
    return (
        <Header>
            <Nav>
                <NavList>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Resume</li>
                    <li>Contact</li>
                </NavList>
            </Nav>
        </Header>
    )
}

/**
 * Renders a `<header>` tag. This element expands to `100vw` at all
 * breakpoints. This element displays the navigation bar's background color.
 */
const Header = styled('header')`
    /* Positional styles */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    /* Box model styles */
    width: 100vw;
    height: ${theme.dimensions.heights.navbar};

    /* Visual styles */
    background: rgba(${theme.colors.background}, 0.97);
    border-bottom: 1px solid rgba(${theme.colors.border}, 0.95);
`

/**
 * Renders a `<nav>` tag. This element expands to `100%`, or `100vw`, at
 * smaller viewport widths but caps at a `max-width: 1024px;`. This element
 * contains the portfolio logo image and navigation list.
 */
const Nav = styled('nav')`
    /* Positional styles */
    position: relative;

    /* Box model styles */
    width: 100%;
    max-width: 1024px;
    height: 100%;
`

/**
 * Renders a `<ul>` tag. This element contains the navigation links. It is a
 * fixed width at larger viewport widths.
 */
const NavList = styled('ul')`
    /* Positional styles */
    position: absolute;
    top: 100%;
    left: 0;

    /* Box model styles */
    display: none;

    /* Visual styles */
    list-style: none;
`

export default Navbar
