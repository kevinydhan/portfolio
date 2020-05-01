import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import NavList from './NavList'
import styled, { css } from 'styled-components'
import { theme, Keyframes as KF, SquareOutlineIcon } from '@theme'

// =============================================================================

const Navbar = ({
    mainContentRef,
    themeColor,
    visualState,
    toggleNavList,
    closeNavList,
}) => {
    const {
        isNavbarHidden,
        isBackgroundTransparent,
        isNavbarDropdownMenuOpen,
    } = visualState

    useEffect(() => {
        if (mainContentRef.current) {
            mainContentRef.current.addEventListener('click', closeNavList)
        }

        return () => {
            const mainContent = mainContentRef
            mainContent.current.removeEventListener('click', closeNavList)
        }
    }, [mainContentRef, closeNavList])

    return (
        <Header
            className={isNavbarHidden && 'hidden'}
            isBackgroundTransparent={isBackgroundTransparent}
        >
            <Nav>
                <MenuButton
                    onClick={toggleNavList}
                    aria-label="Dropdown navigation menu"
                >
                    <SquareOutlineIcon />
                </MenuButton>
                <Logo href="#">Kevin Han</Logo>
                <NavList
                    isNavbarDropdownMenuOpen={isNavbarDropdownMenuOpen}
                    closeNavList={closeNavList}
                    themeColor={themeColor}
                />
            </Nav>
        </Header>
    )
}

Navbar.propTypes = {
    mainContentRef: PropTypes.object,
    themeColor: PropTypes.string.isRequired,
    visualState: PropTypes.exact({
        isNavbarHidden: PropTypes.bool.isRequired,
        isBackgroundTransparent: PropTypes.bool.isRequired,
        isNavbarDropdownMenuOpen: PropTypes.bool.isRequired,
    }).isRequired,
    toggleNavList: PropTypes.func.isRequired,
    closeNavList: PropTypes.func.isRequired,
}

// =============================================================================

const {
    colorBackground,
    colorHeading,
    fontFamilyLogo,
    fontSizes,
    heightNavbar,
    maxWidthMain,
    paddingSidesMainXs,
    paddingSidesMainSm,
    paddingSidesMainMd,
    paddingSidesMainLg,
    breakpointXs,
    breakpointSm,
    breakpointMd,
    breakpointLg,
    breakpointXl,
    boxShadowMain,
    transitionLogo,
    transitionNavbar,
} = theme

// =============================================================================

const Header = styled('header')`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: ${heightNavbar};
    background: rgba(${colorBackground}, 1);
    box-shadow: ${boxShadowMain};

    transform: translateY(0);
    transition: transform ${transitionNavbar}, background ${transitionNavbar},
        box-shadow ${transitionNavbar};

    &.hidden {
        transform: translateY(calc(${heightNavbar} * -1.5));
    }

    @media only screen and (min-width: ${breakpointMd}) {
        ${({ isBackgroundTransparent }) => {
            return isBackgroundTransparent
                ? css`
                      background: transparent;
                      box-shadow: none;
                  `
                : css`
                      background: rgba(${colorBackground}, 0.98);
                      box-shadow: ${boxShadowMain};
                  `
        }}
    }
`

Header.propTypes = {
    isBackgroundTransparent: PropTypes.bool.isRequired,
}

// =============================================================================

const Logo = styled('a')`
    display: none;
    color: rgba(${colorHeading}, 1);
    font-weight: 400;
    font-size: ${fontSizes['+1']};
    font-family: ${fontFamilyLogo};
    text-transform: uppercase;
    transition: color ${transitionLogo};

    &:hover,
    &:active {
        color: rgba(${colorHeading}, 0.6);
    }

    @media only screen and (min-width: ${breakpointMd}) {
        display: block;
    }
`

// =============================================================================

const MenuButton = styled('button')`
    background: transparent;
    border: 0;
    cursor: pointer;

    svg {
        width: 2.25rem;
        height: 2.25rem;
    }

    @media only screen and (min-width: ${breakpointMd}) {
        display: none;
    }
`

// =============================================================================

const Nav = styled('nav')`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: ${maxWidthMain};
    height: 100%;

    @media only screen and (min-width: ${breakpointXs}) {
        padding: 0 ${paddingSidesMainXs};
    }

    @media only screen and (min-width: ${breakpointSm}) {
        padding: 0 ${paddingSidesMainSm};
    }

    @media only screen and (min-width: ${breakpointMd}) {
        justify-content: space-between;
        padding: 0 ${paddingSidesMainMd};
    }

    @media only screen and (min-width: ${breakpointLg}) {
        padding: 0 ${paddingSidesMainLg};
    }
`

// =============================================================================

export default Navbar
