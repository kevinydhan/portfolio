import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, Keyframes as KF } from '@theme'
import { generateKey } from '@utils'
import { navLinks } from '@data/site.yml'

// =============================================================================

const NavList = ({ isOpen, closeNavList }) => (
    <List isOpen={isOpen}>
        {navLinks.map((link, i) => {
            const { text, ...linkProps } = link
            const navListItemProps = {}

            if (hiddenNavListItems.includes(text)) {
                navListItemProps.additionalStyles = additionalHiddenNavListItemStyles
            }

            return (
                <NavListItem key={generateKey(text, i)} {...navListItemProps}>
                    <NavLink {...linkProps} onClick={closeNavList}>
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
}

// =============================================================================

const List = styled('ul')`
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

export default memo(NavList, (prevProps, nextProps) => {
    const isSameIsOpenProp = prevProps.isOpen === nextProps.isOpen
    return isSameIsOpenProp
})
