import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import NavList from './NavList'
import styled, { css } from 'styled-components'
import { theme, Keyframes as KF, SquareOutlineIcon } from '@theme'
import debounce from 'lodash.debounce'

// =============================================================================

const Navbar = ({ mainContentRef, themeColor }) => {
    const [state, setState] = useState({
        isOpen: false,
        isHidden: false,
        isBackgroundTransparent: true,
        scrollPosition: 0,
    })

    const toggleNavList = () => setState({ ...state, isOpen: !state.isOpen })
    const closeNavList = () => setState({ ...state, isOpen: false })

    const handleScroll = debounce(() => {
        setState((prevState) => {
            const scrollPosition = document.body.getBoundingClientRect().top

            return {
                ...prevState,
                scrollPosition,
                isOpen: false,
                isHidden: scrollPosition < prevState.scrollPosition,
                isBackgroundTransparent:
                    Math.abs(scrollPosition) < window.innerHeight,
            }
        })
    }, debounceInteral)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        if (mainContentRef.current) {
            mainContentRef.current.addEventListener('click', closeNavList)
        }

        return () => {
            window.removeEventListener('scroll', handleScroll)
            mainContentRef.current.removeEventListener('click', closeNavList)
        }
    }, [])

    return (
        <Header
            className={state.isHidden && 'hidden'}
            isBackgroundTransparent={state.isBackgroundTransparent}
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
                    isOpen={state.isOpen}
                    closeNavList={closeNavList}
                    themeColor={themeColor}
                />
            </Nav>
        </Header>
    )
}

const debounceInteral = 50

Navbar.propTypes = {
    mainContentRef: PropTypes.object,
    themeColor: PropTypes.string.isRequired,
}

// =============================================================================

const Header = styled('header')`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    width: 100%;
    height: ${theme.heightNavbar};
    background: rgba(${theme.colorBackground}, 1);
    box-shadow: ${theme.boxShadowMain};

    transform: translateY(0);
    transition: transform ${theme.transitionNavbar},
        background ${theme.transitionNavbar},
        box-shadow ${theme.transitionNavbar};

    &.hidden {
        transform: translateY(calc(${theme.heightNavbar} * -1.5));
    }

    @media only screen and (min-width: 768px) {
        ${({ isBackgroundTransparent }) => {
            return isBackgroundTransparent
                ? css`
                      background: transparent;
                      box-shadow: none;
                  `
                : css`
                      background: rgba(${theme.colorBackground}, 0.98);
                      box-shadow: ${theme.boxShadowMain};
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
    color: rgba(${theme.colorHeading}, 1);
    font-weight: 400;
    font-family: ${theme.fontFamilyLogo};
    text-transform: uppercase;
    opacity: 0;
    transition: color ${theme.transitionLogo};
    animation: ${KF.slide} 500ms linear 1500ms 1 forwards;

    &:hover,
    &:active {
        color: rgba(${theme.colorHeading}, 0.6);
    }

    @media only screen and (min-width: 768px) {
        display: block;
        font-size: 20px;
    }

    @media only screen and (min-width: 1024px) {
        font-size: 22px;
    }

    @media only screen and (min-width: 1366px) {
        font-size: 24px;
    }
`

// =============================================================================

const MenuButton = styled('button')`
    background: transparent;
    border: 0;
    cursor: pointer;

    svg {
        width: 36px;
        height: 36px;
    }

    @media only screen and (min-width: 768px) {
        display: none;
    }
`

// =============================================================================

const Nav = styled('nav')`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: ${theme.maxWidthMain};
    height: 100%;

    @media only screen and (min-width: ${theme.breakpointXs}) {
        padding: 0 ${theme.paddingSidesMainXs};
    }

    @media only screen and (min-width: ${theme.breakpointSm}) {
        padding: 0 ${theme.paddingSidesMainSm};
    }

    @media only screen and (min-width: 768px) {
        justify-content: space-between;
        padding: 0 ${theme.paddingSidesMainMd};
    }

    @media only screen and (min-width: 1024px) {
        padding: 0 ${theme.paddingSidesMainLg};
    }

    @media only screen and (min-width: 1366px) {
        padding: 0;
    }
`

// =============================================================================

export default Navbar
