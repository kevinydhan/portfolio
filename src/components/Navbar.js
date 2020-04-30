import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, Keyframes as KF, SquareOutlineIcon } from '@theme'
import { generateKey } from '@utils'
import debounce from 'lodash.debounce'
import { navLinks } from '@data/site.yml'

class Navbar extends Component {
    hiddenNavListItems = ['Home']
    debounceInteral = 50

    state = {
        isOpen: false,
        isHidden: false,
        scrollPosition: 0,
    }

    toggleNavList = () => this.setState({ isOpen: !this.state.isOpen })

    closeNavList = () => this.setState({ isOpen: false })

    handleScroll = debounce(() => {
        this.setState((prevState) => {
            const scrollPosition = document.body.getBoundingClientRect().top

            return {
                ...prevState,
                scrollPosition,
                isHidden: scrollPosition < prevState.scrollPosition,
                isOpen: false,
            }
        })
    }, this.debounceInteral)

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentDidUpdate(prevProps) {
        const { mainContentRef } = prevProps

        if (mainContentRef.current) {
            mainContentRef.current.addEventListener('click', this.closeNavList)
        }
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
                        <SquareOutlineIcon />
                    </MenuButtonContainer>
                    <Logo href="#">Kevin Han</Logo>
                    <NavList isOpen={isOpen}>
                        {navLinks.map((link, i) => {
                            const { text, ...linkProps } = link
                            const navListItemProps = {}

                            if (hiddenNavListItems.includes(text)) {
                                navListItemProps.additionalStyles = additionalHiddenNavListItemStyles
                            }

                            return (
                                <NavListItem
                                    key={generateKey(text, i)}
                                    {...navListItemProps}
                                >
                                    <NavLink
                                        {...linkProps}
                                        onClick={closeNavList}
                                    >
                                        {text}
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

const NavList = styled('ul')`
    position: absolute;
    top: 100%;
    left: 0;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    width: 100%;
    padding: 0 16px;
    list-style: none;
    background: rgba(${theme.colorBackground}, 1);

    @media only screen and (min-width: 768px) {
        position: relative;
        top: unset;
        left: unset;
        display: flex;
        width: auto;
        height: 100%;
        padding: 0;
        /* background: rgba(${theme.colorBackground}, 0.98); */
        border: 0;
    }
`

NavList.defaultProps = {
    isOpen: false,
}

NavList.propTypes = {
    isOpen: PropTypes.bool,
}

// =============================================================================

const NavListItem = styled('li')`
    @media only screen and (min-width: 768px) {
        opacity: 0;

        & + & {
            margin-left: 46px;
        }

        &:nth-child(2) {
            animation: ${KF.slide} 500ms linear 1750ms 1 forwards;
        }

        &:nth-child(3) {
            animation: ${KF.slide} 500ms linear 1900ms 1 forwards;
        }

        &:nth-child(4) {
            animation: ${KF.slide} 500ms linear 2050ms 1 forwards;
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

const NavLink = styled('a')`
    display: flex;
    padding: 16px 0;
    font-size: 16px;

    @media only screen and (min-width: 768px) {
        position: relative;
        align-items: center;
        height: 100%;
        padding: 0;
        transition: color ${theme.transitionNavLink};

        /* Defines the underline at the bottom of each navigation list item. */
        &::after {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: rgba(${theme.colorPrimary}, 1);
            transform: scaleX(0);
            transform-origin: right;
            transition: transform ${theme.transitionNavLink};
            content: '';
        }

        &:hover,
        &:active {
            color: rgba(${theme.colorHeading}, 0.6);

            &::after {
                transform: scaleX(1);
                transform-origin: left;
            }
        }
    }
`

// =============================================================================

export default Navbar
