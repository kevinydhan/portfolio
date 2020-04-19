// React modules
import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { SquareOutlineButton } from '@theme/icons'

// Styling modules
import styled, { css } from 'styled-components'
import { theme } from '@theme'

// Misc. modules
import { navLinks, logo } from '@config'
import { generateKey } from '@utils'

// =============================================================================

class Navbar extends Component {
    hiddenNavListItems = ['Home']
    state = {
        // Keeps track of the open/close state of the dropdown menu
        isOpen: false,

        // Keeps track of the visible/hidden state when a user scrolls up or
        // down
        isHidden: false,
        scrollPosition: 0,
    }

    toggleNavList = () => this.setState({ isOpen: !this.state.isOpen })
    closeNavList = () => this.setState({ isOpen: false })

    handleScroll = () => {
        this.setState((prevState) => {
            const scrollPosition = document.body.getBoundingClientRect().top
            return {
                ...prevState,
                scrollPosition,
                isHidden: scrollPosition < prevState.scrollPosition,
            }
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        const { state, hiddenNavListItems, toggleNavList, closeNavList } = this
        const { isOpen, isHidden } = state

        return (
            <Header className={isHidden && 'hidden'}>
                <Nav>
                    <MenuButtonContainer onClick={toggleNavList}>
                        <SquareOutlineButton />
                    </MenuButtonContainer>
                    <Logo href="#">Kevin Han</Logo>
                    <NavList isOpen={isOpen}>
                        {navLinks.map((link, i) => {
                            const navListItemProps = {}

                            if (hiddenNavListItems.includes(link.name)) {
                                navListItemProps.additionalStyles = additionalHiddenNavListItemStyles
                            }
                            return (
                                <NavListItem
                                    key={generateKey(link.name, i)}
                                    {...navListItemProps}
                                >
                                    <NavLink
                                        href={link.href}
                                        onClick={closeNavList}
                                    >
                                        {link.name}
                                    </NavLink>
                                </NavListItem>
                            )
                        })}
                    </NavList>
                </Nav>
            </Header>
        )
    }
}

// =============================================================================

const { colors, transitions } = theme
const heights = theme.dimensions.heights

// =============================================================================

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
    background: rgba(${colors.background}, 1);
    /* background: white; */
    /* border-bottom: 1px solid rgba(${colors.border}, 0.95); */

    transform: translateY(0);
    transition: transform ${transitions.navbar};

    &.hidden {
        transform: translateY(calc(${heights.navbar.md} * -1));
    }

    @media only screen and (min-width: 768px) {
        height: ${heights.navbar.md};
        background: rgba(${colors.background}, 0.98);
    }
`

// =============================================================================

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
    padding: 0 24px;

    /* Visual styles */
    /* border-right: 1px solid white;
    border-left: 1px solid white; */

    /* Visual styles */
    /* background: pink; */

    @media only screen and (min-width: 768px) {
        justify-content: space-between;
    }
`

// =============================================================================

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
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    width: 100%;
    padding: 0 24px;

    /* Visual styles */
    list-style: none;
    background: rgba(${colors.background}, 1);

    border-top: 1px solid rgba(${colors.text}, 0.1);
    border-bottom: 1px solid rgba(${colors.text}, 0.1);
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

        /* Visual styles */
        background: rgba(${colors.background}, 0.98);
        border: 0;
    }
`

NavList.defaultProps = { isOpen: false }
NavList.propTypes = { isOpen: PropTypes.bool }

// =============================================================================

/**
 * This element parents the navigation link. This element provides top and
 * bottom padding at mobile viewports and left margins at larger viewports.
 */
const NavListItem = styled('li')`
    @media only screen and (min-width: 768px) {
        & + & {
            margin-left: 46px;
        }
    }

    @media only screen and (min-width: 1024px) {
        & + & {
            margin-left: 50px;
        }
    }

    @media only screen and (min-width: 1024px) {
        & + & {
            margin-left: 60px;
        }
    }

    ${(props) => props.additionalStyles}
`

const additionalHiddenNavListItemStyles = css`
    @media only screen and (min-width: 768px) {
        display: none;
    }
`

// =============================================================================

/**
 * This element contains the navigation link. It takes up the entire width and
 * height of its parent at all viewport widths. This is to allow an end user to
 * be able to click anywhere within the box instead of clicking only on the
 * link. It has a pseudo-element that animates an underline whenever this
 * element is hovered or active.
 */
const NavLink = styled('a')`
    display: flex;
    padding: 18px 0;
    color: rgba(${colors.heading}, 1);
    font-size: 18px;

    @media only screen and (min-width: 768px) {
        position: relative;
        align-items: center;
        height: 100%;
        padding: 0;
        transition: color ${transitions.navLinks};

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
            transition: transform ${transitions.navLinks};
            content: '';
        }

        &:hover,
        &:active {
            color: rgba(${colors.heading}, 0.6);

            &::after {
                transform: scaleX(1);
                transform-origin: left;
            }
        }
    }

    @media only screen and (min-width: 1440px) {
        font-size: 19px;
    }
`

// =============================================================================

/**
 * This element contains the square outline SVG.
 */
const MenuButtonContainer = styled('span')`
    cursor: pointer;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`

// =============================================================================

/**
 * This element contains the website's logo.
 */
const Logo = styled('a')`
    display: none;
    color: rgba(${colors.heading}, 1);
    font-weight: ${logo.fontWeight};
    font-family: ${logo.fontFamily}, sans-serif;
    text-transform: uppercase;
    transition: color ${transitions.navLinks};

    &:hover,
    &:active {
        color: rgba(${colors.heading}, 0.6);
    }

    @media only screen and (min-width: 768px) {
        display: block;
        font-size: 24px;
    }

    @media only screen and (min-width: 1024px) {
        font-size: 26px;
    }

    @media only screen and (min-width: 1440px) {
        font-size: 28px;
    }
`

// =============================================================================

export default Navbar
