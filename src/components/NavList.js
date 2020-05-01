import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, Keyframes as KF } from '@theme'
import { generateKey, arePropsEqual } from '@utils'
import { navLinks } from '@data/site.yml'

// =============================================================================

const NavList = ({ isOpen, closeNavList, themeColor }) => (
    <List isOpen={isOpen}>
        {navLinks.map((link, i) => {
            const { text, ...linkProps } = link
            const navListItemProps = {}

            if (hiddenNavListItems.includes(text)) {
                navListItemProps.additionalStyles = additionalHiddenNavListItemStyles
            }

            return (
                <NavListItem key={generateKey(text, i)} {...navListItemProps}>
                    <NavLink
                        {...linkProps}
                        onClick={closeNavList}
                        themeColor={themeColor}
                    >
                        {text}
                    </NavLink>
                </NavListItem>
            )
        })}
    </List>
)

const hiddenNavListItems = ['Home']

NavList.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeNavList: PropTypes.func.isRequired,
    themeColor: PropTypes.string.isRequired,
}

// =============================================================================

const {
    colorBackground,
    colorHeading,
    paddingSidesMainXs,
    breakpointMd,
    breakpointLg,
    breakpointXl,
    boxShadowMain,
    transitionNavLink,
} = theme

// =============================================================================

const List = styled('ul')`
    position: absolute;
    top: 100%;
    left: 0;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    width: 100%;
    padding: 0 ${paddingSidesMainXs};
    list-style: none;
    background: rgba(${colorBackground}, 1);
    box-shadow: ${boxShadowMain};

    @media only screen and (min-width: ${breakpointMd}) {
        position: relative;
        top: unset;
        left: unset;
        display: flex;
        width: auto;
        height: 100%;
        padding: 0;
        background: transparent;
        border: 0;
        box-shadow: none;
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
    @media only screen and (min-width: ${breakpointMd}) {
        opacity: 0;

        & + & {
            margin-left: 2.875rem;
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

    @media only screen and (min-width: ${breakpointLg}) {
        & + & {
            margin-left: 3.125rem;
        }
    }

    @media only screen and (min-width: ${breakpointXl}) {
        & + & {
            margin-left: 3.75rem;
        }
    }

    ${({ additionalStyles }) => additionalStyles}
`

const additionalHiddenNavListItemStyles = css`
    @media only screen and (min-width: ${breakpointMd}) {
        display: none;
    }
`

// =============================================================================

const NavLink = styled('a')`
    display: flex;
    padding: ${paddingSidesMainXs} 0;

    @media only screen and (min-width: ${breakpointMd}) {
        position: relative;
        align-items: center;
        height: 100%;
        padding: 0;
        transition: color ${transitionNavLink};

        /* Defines the underline at the bottom of each navigation list item. */
        &::after {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0.1875rem;
            background: ${({ themeColor }) => `rgba(${theme[themeColor]}, 1)`};
            transform: scaleX(0);
            transform-origin: right;
            transition: transform ${transitionNavLink};
            content: '';
        }

        &:hover,
        &:active {
            color: rgba(${colorHeading}, 0.6);

            &::after {
                transform: scaleX(1);
                transform-origin: left;
            }
        }
    }
`

NavLink.defaultProps = {
    themeColor: 'colorPrimary',
}

NavLink.propTypes = {
    themeColor: PropTypes.string,
}

// =============================================================================

export default memo(NavList, arePropsEqual(['isOpen', 'themeColor']))
