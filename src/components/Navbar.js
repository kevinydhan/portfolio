import React, { memo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import NavList from './NavList'
import styled from 'styled-components'
import { theme, Keyframes as KF, SquareOutlineIcon } from '@theme'
import debounce from 'lodash.debounce'

// =============================================================================

const Navbar = ({ mainContentRef }) => {
    const [state, setState] = useState({
        isOpen: false,
        isHidden: false,
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
                isHidden: scrollPosition < prevState.scrollPosition,
                isOpen: false,
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
        <Header className={state.isHidden && 'hidden'}>
            <Nav>
                <MenuButtonContainer onClick={toggleNavList}>
                    <SquareOutlineIcon />
                </MenuButtonContainer>
                <Logo href="#">Kevin Han</Logo>
                <NavList isOpen={state.isOpen} closeNavList={closeNavList} />
            </Nav>
        </Header>
    )
}

const debounceInteral = 50

Navbar.propTypes = {
    mainContentRef: PropTypes.object,
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

    transform: translateY(0);
    transition: transform ${theme.transitionNavbar};

    &.hidden {
        transform: translateY(calc(${theme.heightNavbar} * -1));
    }

    @media only screen and (min-width: 768px) {
        background: rgba(${theme.colorBackground}, 0.98);
    }
`

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

const MenuButtonContainer = styled('button')`
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
    padding: 0 16px;

    @media only screen and (min-width: 768px) {
        justify-content: space-between;
        margin: 0 36px;
        padding: 0;
    }

    @media only screen and (min-width: 1024px) {
        margin: 0 48px;
    }
`

// =============================================================================

export default memo(Navbar, (prevProps, nextProps) => {
    const isSameMainContentRefProp =
        prevProps.mainContentRef.current &&
        prevProps.mainContentRef.current === nextProps.mainContentRef.current

    return isSameMainContentRefProp
})
